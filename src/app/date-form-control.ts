import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{

  override setValue(value: any, options?: {
    onlySelf?: boolean,
    emitEvent?: boolean,
    emitModelToViewChange: boolean,
    emiteViewToModelChange: boolean
  }): void {
    if(value.length === 2 ) {
      super.setValue(value + "/", {
        ...options,
        emitModelToViewChange: true
      })
    }
    // super.setValue(value, {
    //   ...options,
    //   emitModelToViewChange: true
    // })
  }

}
