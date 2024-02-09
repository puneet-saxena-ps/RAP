@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ZProperty'
@Metadata.allowExtensions: true

/*
@ObjectModel.modelCategory: #BUSINESS_OBJECT
@ObjectModel.compositionRoot: true
@ObjectModel.transactionalProcessingEnabled: true */


@OData.publish: true


@UI: {
  headerInfo: { typeName: 'Property Report',
                typeNamePlural: 'Property List'               ,
                title: { type: #STANDARD, label: 'Property Report',
               value: 'Description' }
//                              , description.value: 'Description' 
                }
               
              }




define root view entity Zproperty_cds
  as select distinct from ZPROPERTY_BASE_CDS as _zprop

{
  key Plant,
  key LegacyPropertyNumber,
      Description,
      MailingName,
      Street,
      City,
      State,
      PostalCode,
      County,
      Country,
      PropertyType,
      RetailPc,
      RetailPcLtext,
      RetailPcCc,
      RetailPcFromDate,
      RetailPcToDate,
      RetailPcSegment,
      StoragePc,
      StoragePcLtext,
      StoragePcCc,
      StoragePcFromDate,
      StoragePcToDate,
      StoragePcSegment,
      StorageCbtPc,
      StorageCbtPcLtext,
      StorageCbtPcCc,
      StorageCbtPcFromDate,
      StorageCbtPcToDate,
      StorageCbtPcSegment,
      TennentInsPc,
      TennentInsPcLtext,
      TennentInsPcCc,
      TennentInsPcFromDate,
      TennentInsPcToDate,
      TennentInsPcSegment,
      CommercialPc,
      CommercialPcLtext,
      CommercialPcCc,
      CommercialPcFromDate,
      CommercialPcToDate,
      CommercialPcSegment,
      ManagmentPc,
      ManagmentPcLtext,
      ManagmentPcCc,
      ManagmentPcFromDate,
      ManagmentPcToDate,
      ManagmentPcSegment,
      SolarEnergyPc,
      SolarEnergyPcLtext,
      SolarEnergyPcCc,
      SolarEnergyPcFromDate,
      SolarEnergyPcToDate,
      SolarEnergyPcSegment,
      DirectPhoneNo,
      PublishedPhoneNo,
      FaxNumber,
      TollFreeNumber,
      LocalPhoneNumber,
      TollFreeNumber2,
      TollFreeNumber3,
      TollFreeNumber4,
      AlarmPhoneNumber,
      AlarmPhoneNumber1,
      AlarmPhoneNumber2,
      BurgAlarmPhoneNumber,
      CellPhoneNumber,
      DirectPhoneNo2,
      DirectPhoneNo3,
      ElevatorPhoneNo1,
      ElevatorPhoneNo2,
      ElevatorPhoneNo3,
      ExtensionNumber,
      OfficePhoneNumber,
      PublishedPhoneNo2,
      PropertyEmailAddress,
      Rank,
      Network1IpAddress,
      Network2IpAddress,
      NetworkType,
      NetworkVendor,
      NetworkRouterAddress,
      concat_with_space( concat(  concat('(', Active ), ')'), _ACTIVE.Description, 1 )                               as Active,
      //  BusinessUnitType,
      concat_with_space( concat(  concat('(', BusinessUnitType ), ')'), _BUSINESS_UNIT_TYPE.Description, 1 )         as BusinessUnitType,
      concat_with_space( concat(  concat('(', CustomerCode ), ')'), _CUSTOMER_CODE.Description, 1 )              as CustomerCode,
      concat_with_space( concat(  concat('(', EntityType ), ')'), _ENTITY_TYPE.Description, 1 )                as EntityType,
      CombinedSurvivingNumber,
      Note1,
      Note2,
      Note3,
      concat_with_space( concat(  concat('(', MarketKey ), ')'), _MARKET_KEY.Description , 1 )                as MarketKey,
      concat_with_space( concat(  concat('(', MetroStatisicalArea ), ')'), _METRO_STATISICAL_AREA.Description, 1 )      as MetroStatisicalArea,
      concat_with_space( concat(  concat('(', Neighborwood ), ')'), _NEIGHBORWOOD.Description, 1 )               as Neighborwood,
      concat_with_space( concat(  concat('(', SameStore ), ')'), _SAME_STORE.Description, 1 )                 as SameStore,
      concat_with_space( concat(  concat('(', ATypeProperty ), ')'), _A_TYPE_PROPERTY.Description, 1 )            as ATypeProperty,
      BillBoard,
      Comercial,
      CellTower,
      Solar,
      KeyTraniningProfessional,
      concat_with_space( concat(  concat('(', MartketClass ), ')'), _MARTKET_CLASS.Description, 1 )              as MartketClass,
      concat_with_space( concat(  concat('(', TaxOwner ), ')'), _TAX_OWNER.Description, 1 )                  as TaxOwner,
      TaxOwnerFein,
      concat_with_space( concat(  concat('(', LegalOwner ), ')'), _LEGAL_OWNER.Description, 1 )                as LegalOwner,
      LegalOwnerFein,
      OwnerOfRecord,
      SolarEntity,
      ReStartDate,
      NewOwnershipDate,
      OriginalStartDate,
      TerminationDate,
      BuCreateDate,
      FinrepNum1,
      FinrepNum2,
      InsPrem2000,
      InsPrem3000,
      InsPrem4000,
      InsPrem5000,
      FinrepNum7,
      FinrepNum8,
      FinrepNum9,
      ErentalMaxDays,
      FloodInsEffDate,
      FinrepDate2,
      FinrepDate3,
      FinrepDate4,
      FinrepDate5,
      FinrepDate6,
      FinrepDate7,
      FinrepDate8,
      FinrepDate9,
      FinrepDate10,
      ZtimeZone,
      OfficeSundayOpenHr,
      OfficeSundayCloseHr,
      OfficeMondayOpenHr,
      OfficeMondayCloseHr,
      OfficeTuesdayOpenHr,
      OfficeTuesdayCloseHr,
      OfficeWednessdayOpenHr,
      OfficeWednessdayCloseHr,
      OfficeThursdayOpenHr,
      OfficeThursdayCloseHr,
      OfficeFridayOpenHr,
      OfficeFridayCloseHr,
      OfficeSaturdayOpenHr,
      OfficeSaturdayCloseHr,
      GateSundayOpenHr,
      GateSundayCloseHr,
      GateMondayOpenHr,
      GateMondayCloseHr,
      GateTuesdayOpenHr,
      GateTuesdayCloseHr,
      GateWednessdayOpenHr,
      GateWednessdayCloseHr,
      GateThursdayOpenHr,
      GateThursdayCloseHr,
      GateFridayOpenHr,
      GateFridayCloseHr,
      GateSaturdayOpenHr,
      GateSaturdayCloseHr,
      GateThanksgivingOpenHr,
      GateThanksgivingCloseHr,
      GateChristmasOpenHr,
      GateChristmasCloseHr,
      GateNewyearOpenHr,
      GateNewyearCloseHr,
      PropertyFeatures,
      DrivingDirections,
      SpecialNotes,
      Lockers,
      LargeTruckAccess,
      FurnitureDollies,
      Basement,
      HandTrucks,
      Carts,
      YearBuilt,
      CapIndexRisk,
      NumberOfBuildings,
      concat_with_space( concat(  concat('(', ConstructionCode ), ')'), _CONSTRUCTION_CODE.Description, 1 )          as ConstructionCode,
      NumberOfStories,
      concat_with_space( concat(  concat('(', ConstructionCode2 ), ')'), _CONSTRUCTION_CODE_2.Description, 1 )        as ConstructionCode2,
      LotSize,
      BuildingClassification,
      GrossSquareFootage,
      FloodZone,
      MilesOfCostalWater25,
      Sprinkler,
      SprinklerRemark,
      FireAlarm,
      FireAlarmRemarks,
      BuglerAlarm,
      BuglerAlarmRemarks,
      ParkingSpaces,
      Elevators,
      Apartments,
      SurvellianceCamera,
      SurvellianceCameraRemarks,
      AcquiredFrom,
      concat_with_space( concat(  concat('(', AcquiredDevelopedThirdP ), ')'), _ACQUIRED_DEVELOPED_THIRD_P.Description, 1 ) as AcquiredDevelopedThirdP,
      Psd,
      PropertyLatitude,
      PropertyLongitude,
      PropertyAdminFee,
      AdminFeeEffectiveDate,
      concat_with_space( concat(  concat('(', PropertyChurnStatus ), ')'), _PROPERTY_CHURN_STATUS.Description, 1 )      as PropertyChurnStatus,
      concat_with_space( concat(  concat('(', ClimateControl ), ')'), _CLIMATE_CONTROL.Description, 1 )            as ClimateControl,
      PropertyWebsiteReservations,
      WebsiteEnabledDate,
      PropertyCallCenterReservati,
      CallCenterEnabledDate,
      PropertyNfsFee,
      MaxReservationDays,
      NsfFeeEffectiveDate,
      PropertyNfsAchFee,
      NfsAchFeeEffectiveDate,
      PropertyInsuranceFrozen,
      PropertyInsuranceCancelDay,
      PreReservationDays,
      DayLightSavingsApplicable,
      KioskProperty,
      KioskActiveDate,
      BuddyPropertyNumber,
      RetailStoreSquareFootage,
      RetailStorageSize,
      OfficeSquareFootage,
      HistoricalProperty,
      HistoricalOwner,
      PsaProperty,
      PsaOwner,
      TransferFrom,
      GeoCode,
      GateAccessZone00,
      GateAccessZone01,
      GateAccessZone02,
      GateAccessZone03,
      GateAccessZone04,
      GateAccessZone05,
      GateAccessZone06,
      GateAccessZone07,
      GateAccessZone08,
      GateAccessZone09,
      GateAccessZone10,
      AppartmentNumber1,
      AppartmentName1,
      NumberOfStories1,
      NumberOfBedRoom1,
      NumberOfBathRoom1,
      AppartmentNumber2,
      AppartmentName2,
      NumberOfStories2,
      NumberOfBedRoom2,
      NumberOfBathRoom2,
      concat_with_space( concat(  concat('(', FeesType1 ), ')'), _FEES_TYPE1.Description, 1 )                 as FeesType1,
      Amount1,
      concat_with_space( concat(  concat('(', FeesType2 ), ')'), _FEES_TYPE2.Description, 1 )                 as FeesType2,
      Amount2,
      concat_with_space( concat(  concat('(', FeesType3 ), ')'), _FEES_TYPE3.Description, 1 )                 as FeesType3,
      Amount3,
      concat_with_space( concat(  concat('(', FeesType4 ), ')'), _FEES_TYPE4.Description, 1 )                 as FeesType4,
      Amount4,
      concat_with_space( concat(  concat('(', FeesType5 ), ')'), _FEES_TYPE5.Description, 1 )                 as FeesType5,
      Amount5,
      concat_with_space( concat(  concat('(', FeesType6 ), ')'), _FEES_TYPE6.Description, 1 )                 as FeesType6,
      Amount6,
      concat_with_space( concat(  concat('(', FeesType7 ), ')'), _FEES_TYPE7.Description, 1 )                 as FeesType7,
      Amount7,
      concat_with_space( concat(  concat('(', FeesType8 ), ')'), _FEES_TYPE8.Description, 1 )                 as FeesType8,
      Amount8,
      concat_with_space( concat(  concat('(', FeesType9 ), ')'), _FEES_TYPE9.Description, 1 )                 as FeesType9,
      Amount9,
      concat_with_space( concat(  concat('(', FeesType10 ), ')'), _FEES_TYPE10.Description, 1 )                as FeesType10,
      Amount10,
      RiskScore,
      RiskRating,
      Cas,
      OfficeCount,
      RestroomCount,
      CommunityType,
      KioskModel,
      KioskGroup,
      KioskDate,
      KioskBuddy,
      CddModel,
      CddGroup,
      CddDate,
      ConnectcareModel,
      ConnectcareGroup,
      ConnectcareDate,
      ConnectcareBuddy,
      SatelliteModel,
      SatelliteGroup,
      SatelliteDate,
      SatelliteHub,
      TrafficMonitoring,
      MajorAcqisitions,
      concat_with_space( concat(  concat('(', LifecycleStage ), ')'), _LIFECYCLE_STAGE.Description, 1 )            as LifecycleStage,
      ChangedBy,
      ChangedDate,
      ChangedTime,
      concat_with_space( concat_with_space( concat_with_space( concat_with_space( Description ,  Street, 1), City, 1 ), State, 1), PostalCode, 1)    as PropertyHeader
}