import { Attribute, BaseModel, BaseModelConfig, GridLayout } from '@rosoftlab/core';
import { Address } from './address';

@BaseModelConfig({
    type: 'company'
})
export class Organization extends BaseModel {

    @Attribute({ serializedName: 'id' })
    id!: string;

    @GridLayout('General.Name', null, 1)
    @Attribute({ serializedName: 'name' })
    name!: string;

    @Attribute({ serializedName: 'address' })
    address!: Address;

    @Attribute({ serializedName: 'otherInfo' })
    otherInfo!: any;
}

