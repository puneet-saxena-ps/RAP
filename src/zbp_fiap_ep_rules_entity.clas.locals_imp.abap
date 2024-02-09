CLASS lhc_ZFIAP_EP_RULES_ENTITY DEFINITION INHERITING FROM cl_abap_behavior_handler.
  PRIVATE SECTION.

    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
      IMPORTING keys REQUEST requested_authorizations FOR Rules RESULT result.

    METHODS create FOR MODIFY
      IMPORTING entities FOR CREATE Rules.

    METHODS update FOR MODIFY
      IMPORTING entities FOR UPDATE Rules.

    METHODS delete FOR MODIFY
      IMPORTING keys FOR DELETE Rules.

    METHODS read FOR READ
      IMPORTING keys FOR READ Rules RESULT result.

    METHODS lock FOR LOCK
      IMPORTING keys FOR LOCK Rules.

    METHODS map_Data IMPORTING im_data            TYPE zfiap_ep_rules
                     RETURNING VALUE(r_bapi_data) TYPE zfiap_ep_rules.

ENDCLASS.

CLASS lhc_ZFIAP_EP_RULES_ENTITY IMPLEMENTATION.

  METHOD maP_data.
    r_bapi_data-State      = im_data-State.
    r_bapi_data-Escheat_Rule = im_data-Escheat_Rule.
    r_bapi_data-Remit_Type = im_data-Remit_Type.
    r_bapi_data-Prop_Type_Code = im_data-Prop_Type_Code.
    r_bapi_data-PI_Delay   = im_data-PI_Delay.
    r_bapi_data-Holding_Period = im_data-Holding_Period.
    r_bapi_data-hp_uom     = im_data-hp_uom.
    r_bapi_data-Changed_At = im_data-Changed_At.
    r_bapi_data-Changed_By = im_data-Changed_By.
    r_bapi_data-Changed_On = im_data-Changed_On.
    r_bapi_data-Created_At = im_data-Created_At .
    r_bapi_data-Created_On = im_data-Created_On .
    r_bapi_data-Created_By = im_data-Created_By.
  ENDMETHOD.

  METHOD get_instance_authorizations.
  ENDMETHOD.

  METHOD create.

    DATA: ls_ep_rules TYPE zfiap_ep_rules,
          lt_ep_rules TYPE TABLE OF zfiap_ep_rules.

    LOOP AT entities INTO DATA(ls_entity).
      ls_entity-Created_At = sy-uzeit.
      ls_entity-Created_By = sy-uname.
      ls_entity-Created_On = sy-datum.
      ls_ep_rules = map_data( im_data = CORRESPONDING #( ls_entity ) ).
      INSERT VALUE #( %cid = ls_entity-%cid
                      State = ls_ep_rules-state
                      )
                      INTO TABLE mapped-rules.

      case  ls_ep_rules-escheat_rule.
         when 'Send Immediate to Tenant' .
             ls_ep_rules-escheat_rule = 'I'.
          when 'Escheat Yes' .
            ls_ep_rules-escheat_rule = 'Y'.
          when 'Escheat No'.
             ls_ep_rules-escheat_rule = 'N' .
          when ' '.
                ls_ep_rules-escheat_rule = ' ' .
            Endcase   .
        case  ls_ep_rules-remit_type.
         when 'State' .
             ls_ep_rules-remit_type = 'S'.
          when 'County' .
            ls_ep_rules-remit_type = 'C'.
          when 'Does Not Escheat'.
             ls_ep_rules-remit_type = ' ' .
          when 'Not been Researched'.
                ls_ep_rules-remit_type = 'N' .
          when ' '.
                ls_ep_rules-remit_type = ' ' .
            Endcase   .
          case  ls_ep_rules-hp_uom.
         when 'DAY' OR 'Day' .
             ls_ep_rules-hp_uom = 'D'.
          when 'YEAR' OR 'Year'.
            ls_ep_rules-hp_uom = 'Y'.
          when 'MONTH' OR 'Month'.
             ls_ep_rules-hp_uom = 'M'.
          when ' '.
                ls_ep_rules-hp_uom = ' ' .
            Endcase   .
      MODIFY zfiap_ep_rules FROM ls_ep_rules.
      CLEAR ls_entity.
    ENDLOOP.

  ENDMETHOD.

  METHOD update.
    DATA: ls_ep_rules TYPE zfiap_ep_rules,
          lt_ep_rules TYPE TABLE OF zfiap_ep_rules.

    READ TABLE entities INTO DATA(ls_entity) INDEX 1.

    SELECT SINGLE * FROM zfiap_ep_rules
   INTO @DATA(ls_rules)
   WHERE state = @ls_entity-state.

    IF ls_entity-%control-Escheat_Rule = '01'.
      ls_rules-escheat_rule = ls_entity-Escheat_Rule.
    ENDIF.
    IF ls_entity-%control-Remit_Type = '01'.
      ls_rules-remit_type = ls_entity-Remit_Type.
    ENDIF.
    IF ls_entity-%control-Prop_Type_Code = '01'.
      ls_rules-prop_type_code = ls_entity-Prop_Type_Code.
    ENDIF.
    IF ls_entity-%control-PI_Delay = '01'.
      ls_rules-pi_delay = ls_entity-PI_Delay.
    ENDIF.
    IF ls_entity-%control-Holding_Period = '01'.
      ls_rules-holding_period = ls_entity-Holding_Period.
    ENDIF.
    IF ls_entity-%control-hp_uom = '01'.
      ls_rules-hp_uom = ls_entity-hp_uom.
    ENDIF.

      case  ls_rules-escheat_rule.
         when 'Send Immediate to Tenant' .
             ls_rules-escheat_rule = 'I'.
          when 'Escheat Yes' .
            ls_rules-escheat_rule = 'Y'.
          when 'Escheat No'.
             ls_rules-escheat_rule = 'N' .
          when ' '.
                ls_rules-escheat_rule = ' ' .
            Endcase   .
        case  ls_rules-remit_type.
         when 'State' .
             ls_rules-remit_type = 'S'.
          when 'County' .
            ls_rules-remit_type = 'C'.
          when 'Does Not Escheat'.
             ls_rules-remit_type = ' ' .
          when 'Not been Researched'.
                ls_rules-remit_type = 'N' .
          when ' '.
                ls_rules-remit_type = ' ' .
            Endcase   .
          case  ls_rules-hp_uom.
         when 'DAY' OR 'Day' .
             ls_rules-hp_uom = 'D'.
          when 'YEAR' OR 'Year'.
            ls_rules-hp_uom = 'Y'.
          when 'MONTH' OR 'Month'.
             ls_rules-hp_uom = 'M'.
          when ' '.
                ls_rules-hp_uom = ' ' .
            Endcase   .

      ls_rules-Changed_By = sy-uname.
      ls_rules-Changed_On = sy-datum.
      ls_rules-Changed_At = sy-uzeit.

      MODIFY zfiap_ep_rules FROM ls_rules.
      CLEAR: ls_rules, ls_entity.

  ENDMETHOD.

  METHOD delete.
    DATA: ls_ep_rules TYPE zfiap_ep_rules,
          lt_ep_rules TYPE TABLE OF zfiap_ep_rules.


    READ TABLE keys INTO DATA(ls_keys) INDEX 1.
    SELECT SINGLE * FROM zfiap_ep_rules INTO @DATA(ls_entity) WHERE state = @ls_keys-State.

    DELETE zfiap_ep_rules FROM ls_entity.
  ENDMETHOD.

  METHOD read.
    READ TABLE keys INTO DATA(ls_keys) INDEX 1.

    DATA: ls_ep_rules TYPE zfiap_ep_rules,
          lt_ep_rules TYPE TABLE OF zfiap_ep_rules.

    SELECT * FROM zfiap_ep_rules
     FOR ALL ENTRIES IN @keys
     WHERE State = @keys-State
     INTO CORRESPONDING FIELDS OF TABLE @result.
  ENDMETHOD.

  METHOD lock.
  ENDMETHOD.

ENDCLASS.

CLASS lsc_ZFIAP_EP_RULES_ENTITY DEFINITION INHERITING FROM cl_abap_behavior_saver.
  PROTECTED SECTION.

    METHODS finalize REDEFINITION.

    METHODS check_before_save REDEFINITION.

    METHODS save REDEFINITION.

    METHODS cleanup REDEFINITION.

    METHODS cleanup_finalize REDEFINITION.

ENDCLASS.

CLASS lsc_ZFIAP_EP_RULES_ENTITY IMPLEMENTATION.

  METHOD finalize.
  ENDMETHOD.

  METHOD check_before_save.
  ENDMETHOD.

  METHOD save.
  ENDMETHOD.

  METHOD cleanup.
  ENDMETHOD.

  METHOD cleanup_finalize.
  ENDMETHOD.

ENDCLASS.
