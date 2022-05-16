import { Injectable } from '@angular/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from "web3";
import { Web3ModalService } from './web3-modal/web3-modal/web3-modal.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  web3js: any;
  provider: any;
  accounts = new BehaviorSubject([]);
  uDonate: any;
  web3Modal
  constructor(private web3ModalService: Web3ModalService) { }
  async connectAccount() {
    this.web3ModalService.setConfiguration({
      disableInjectedProvider: false,
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: 'INFURA_ID',
          },
        },
      },
      network: '',
    });
    this.provider = await this.web3ModalService.open();
    console.log(this.provider);
    this.web3js = new Web3(this.provider); // create web3 instance
    console.log(this.web3js);
    const accounts = await this.web3js.eth.getAccounts();
    this.accounts.next(accounts);
    console.log(this.accounts);
  }
}
