import { Attribute, BaseModel, BaseModelConfig } from '@rosoftlab/core';
@BaseModelConfig({
    type: 'file',
})
export class NexityFile extends BaseModel {

    @Attribute({ serializedName: 'id' })
    id!: string;

    @Attribute({ serializedName: 'mimeType' })
    mimeType!: string;

    @Attribute({ serializedName: 'filename' })
    filename!: string;

    @Attribute({ serializedName: 's3FileName' })
    s3FileName!: string;

    @Attribute({ serializedName: 'isTemporary' })
    isTemporary!: boolean;
}
