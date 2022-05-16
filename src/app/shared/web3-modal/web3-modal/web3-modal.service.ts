import { EventEmitter, Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { CONNECT_EVENT, ERROR_EVENT, IProviderControllerOptions, IProviderUserOptions, Web3WalletConnector } from '../web3modal-ts/src';

@Injectable({
  providedIn: 'root'
})
export class Web3ModalService {
  private web3WalletConnector: Web3WalletConnector

  public shouldOpen: EventEmitter<boolean> = new EventEmitter();
  public providers: EventEmitter<IProviderUserOptions[]> = new EventEmitter();

  constructor () {
    //@Optional() configOptions?: IProviderControllerOptions
    this.web3WalletConnector = new Web3WalletConnector()
  }

  async open() {
    this.providers.next(this.web3WalletConnector.providers)

    return await new Promise((resolve, reject) => {
      this.web3WalletConnector.providerController.on(CONNECT_EVENT, provider => {
        resolve(provider);
      });

      this.web3WalletConnector.providerController.on(ERROR_EVENT, error => {
        reject(error);
      });

      this.shouldOpen.next(true)

      this.shouldOpen.pipe(take(1)).subscribe({
        next: (open) => {
          if (!open) {
            reject('Dismissed modal');
          }
        }
      })
    }).finally(() => {
      this.close()
    })
  }

  setConfiguration(options: IProviderControllerOptions) {
    this.web3WalletConnector.setConfiguration(options)
  }

  clearCachedProvider(): void {
    this.web3WalletConnector.providerController.clearCachedProvider();
  }

  setCachedProvider(id: string): void {
    this.web3WalletConnector.providerController.setCachedProvider(id);
  }

  close() {
    this.shouldOpen.next(false)
  }
}
