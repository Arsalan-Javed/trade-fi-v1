import { Attribute, BaseModel, BaseModelConfig } from '@rosoftlab/core';

@BaseModelConfig({
    type: 'statemachine/state'
})
export class State extends BaseModel {
    @Attribute({ serializedName: 'id' })
    id!: string;

    @Attribute({ serializedName: 'name' })
    name: string;

    @Attribute({ serializedName: 'code' })
    code: string;   
}
