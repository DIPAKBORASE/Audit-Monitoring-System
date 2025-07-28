import { combineReducers } from 'redux';
// import { vehicleDetailsReducer } from './vehicleDetails/reducer';
// import { dashboardReducer } from './dashboard/reducer';
// import { customerDetailsReducer } from './customerDetails/reducer';
// import { customersReducer } from './customers/reducer';
// import { vehiclesReducer } from './vehicles/reducer';
// import { globalFilterReducer } from './globalCountrySelection/reducer';
// import { authReducer } from './auth/reducer';
// import { fileUploadDownloadReducer } from './upload/reducer';
// import {fileDetailsReducer} from './upload/reducer';
// import {riderReducer} from './kinga/reducer'
// import { saccoReducer } from './kinga/reducer';
// import { rideretailsReducer } from './riderDetails/reducer';
// import { batteryReducer } from './batteryanalysis/reducer'
// import {InventoryVehiclesReducer} from './inventory/reducer'

export const rootReducer = combineReducers({
//   Customers: customersReducer,
//   Dashboard : dashboardReducer,
//   CustomerDetails : customerDetailsReducer,
//   VehicleDetails: vehicleDetailsReducer,
//   Vehicles:vehiclesReducer,
//   GlobalFilter : globalFilterReducer,
//   Auth: authReducer,
//   FileUploadDownload:fileUploadDownloadReducer,
//   FileDetails:fileDetailsReducer,
//   rider: riderReducer,
//   sacco: saccoReducer,
//   RiderDetail:rideretailsReducer,
//   battery : batteryReducer,
//   inventoryvehicle: InventoryVehiclesReducer
  // Add other reducers here if you have any
});

export type RootState = ReturnType<typeof rootReducer>;