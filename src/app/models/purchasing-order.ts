
import { Attribute, BaseModel, BaseModelConfig } from '@rosoftlab/core';
import { NexityFile } from "./nexity-file";
import { State } from './sm-state';

@BaseModelConfig({
    type: 'purchasingorder'
})
export class PurchasingOrder extends BaseModel {
    @Attribute({ serializedName: 'id' })
    id!: string;

    @Attribute({ serializedName: 'purchasingOrderNo' })
    purchasingOrderNo: string;

    @Attribute({ serializedName: 'contractId' })
    contractId: string;

    @Attribute({ serializedName: 'value' })
    value: number;

    @Attribute({ serializedName: 'statusId' })
    statusId: string

    @Attribute({ serializedName: 'status' })
    status: State

    @Attribute({ serializedName: 'document' })
    document: NexityFile

    @Attribute({ serializedName: 'documentId' })
    documentId: string

    @Attribute({ serializedName: 'tempId' })
    tempId: string
}
