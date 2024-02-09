@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value Help for EP Invoice Numbet'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity ZFI_VH_EP_INV as select distinct from ZFIAP_EP_DATA2 {
//  key Country,
  key invoice_number
  // key Language,
}

