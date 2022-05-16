
import { Attribute, BaseModel, BaseModelConfig, GridLayout, GridLayoutFormat } from '@rosoftlab/core';

@BaseModelConfig({
    type: 'department'
})
export class Department extends BaseModel {
    @Attribute({ serializedName: 'id' })
    id!: string;

    @GridLayout('General.Code', 200, 0, 1, null, GridLayoutFormat.none, null, 1)
    @Attribute({ serializedName: 'code', required: true })
    code: string;

    @GridLayout('General.Name', 200, 0, 1, null, GridLayoutFormat.none, null, 2)
    @Attribute({ serializedName: 'name', required: true })
    name: string;

    @GridLayout('General.Active', 200, 0, 1, null, GridLayoutFormat.none, null, 2)
    @Attribute({ serializedName: 'isActive', required: true, defaultValue: true })
    isActive: boolean;

}
