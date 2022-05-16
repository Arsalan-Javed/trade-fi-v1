import { Attribute, BaseModel, BaseModelConfig, GridLayout, GridLayoutFormat } from '@rosoftlab/core';

@BaseModelConfig({
    type: 'statemachine/objectlog'
})
export class SmObjectLog extends BaseModel {
    @Attribute({ serializedName: 'id' })
    id!: string;

    @Attribute({ serializedName: 'machineInstanceId' })
    machineInstanceId: number;

    @Attribute({ serializedName: 'fromStateId' })
    fromStateId: number;

    @Attribute({ serializedName: 'toStateId' })
    toStateId: number;

    @GridLayout('General.StartDate', 200, 0, 1, null, GridLayoutFormat.date, 'short', 4)
    @Attribute({ serializedName: 'startDate' })
    startDate: Date;

    @GridLayout('General.EndDate', 200, 0, 1, null, GridLayoutFormat.date, 'short', 5)
    @Attribute({ serializedName: 'endDate' })
    endDate: Date;

    @Attribute({ serializedName: 'userId' })
    userId: string;
    @GridLayout('ObjectLog.Message', 300, 0, 1, null, GridLayoutFormat.none, null, 7)
    @Attribute({ serializedName: 'message' })
    message: string;

    @GridLayout('ObjectLog.FromState', 200, 0, 1, null, GridLayoutFormat.none, null, 1)
    @Attribute({ serializedName: 'fromStateName' })
    fromStateName: string;

    @GridLayout('ObjectLog.ToState', 200, 0, 1, null, GridLayoutFormat.none, null, 2)
    @Attribute({ serializedName: 'toStateName' })
    toStateName: string;

    @GridLayout('ObjectLog.Duration', 200, 0, 1, null, GridLayoutFormat.none, null, 6)
    @Attribute({ serializedName: 'elapsed' })
    elapsed: string;

    //TODO how to put the value here
    @GridLayout('ObjectLog.User', 200, 0, 1, null, GridLayoutFormat.none, null, 3)
    user: string;
}
