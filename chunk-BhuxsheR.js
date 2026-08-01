import{$ as K,$r as vD,$t as Up,A as GE,B as HE,Cn as YF,Ct as Pp,E as De,Er as or,Ft as Rf,Jt as UE,K as JE,Kn as es,Kr as tD,L as Gp,Lr as rD,N as Gc,Nn as _D,Ot as QT,Q as Jy,R as Gt,T as Ct,Tn as Yp,Vr as rh,W as Hi$1,Wn as eD,Wt as T,Y as Jc,Yn as g,Yr as ue,Zt as Ug,_r as lh,ar as il,bn as Y0,bt as Op,cr as ji$1,d as A0,et as KF,f as Af,i as $F,it as LD,j as GF,jt as Qp,k as GD,kt as Qc,li as zc,ln as Wc,n as $D,nn as VE,on as W,p as Ag,qn as fi,rt as Kp,v as BE,w as Ci,wr as oD,xr as mt,y as Bc,yr as mh,zr as rf}from"./chunk-CsfGjXga.js";import{C as Tf,D as Xf,E as Uo,S as Pn,T as To,a as Qn,b as Fn,c as Yn,d as ce,f as ea,h as ta,i as Kn,k as bc,l as Zn,m as na,n as Ga,o as Xe,p as gi,r as Jn,s as Xn,t as Fa,u as aa,v as Co,w as Tn,x as Ni}from"./main-AJWLW7T5.js";var $i=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Ji=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Yi(n,p){n&1&&(Ci(0,`span`,3),tD(1,1),Wc())}function it(n,p){n&1&&(Ci(0,`span`,6),tD(1,2),Wc())}var tt=[`*`];var et=new T(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Hi=new T(`MatChipAvatar`);var zi=new T(`MatChipTrailingIcon`);var Vi=new T(`MatChipEdit`);var ji=new T(`MatChipRemove`);var qi=new T(`MatChip`);var Qi=(()=>{class n{_elementRef=g(mt);_parentChip=g(qi);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(i){this._disabled=i}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){g(Tn).load(Tf),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=Bc({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,e){t&2&&(Gc(`disabled`,e._getDisabledAttribute())(`aria-disabled`,e.disabled),rh(`mdc-evolution-chip__action--primary`,e._isPrimary)(`mdc-evolution-chip__action--secondary`,!e._isPrimary)(`mdc-evolution-chip__action--trailing`,!e._isPrimary&&!e._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,YF],tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?-1:KF(i)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var nt=(()=>{class n extends Qi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(i){!this.disabled&&this._isPrimary&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(i){(i.keyCode===13||i.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(i.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let i;return function(e){return(i||(i=rf(n)))(e||n)}})();static ɵdir=Bc({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,e){t&1&&Qp(`click`,function(a){return e._handleClick(a)})(`keydown`,function(a){return e._handleKeydown(a)}),t&2&&(Gc(`tabindex`,e._getTabindex()),rh(`mdc-evolution-chip__action--presentational`,!1))},features:[Pp]})}return n})();var V=(()=>{class n{_changeDetectorRef=g(il);_elementRef=g(mt);_tagName=g($F);_ngZone=g(K);_focusMonitor=g(To);_globalRippleOptions=g(Uo,{optional:!0});_document=g(Gt);_onFocus=new W;_onBlur=new W;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ni();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=g(Pn).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(i){this._value=i}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(i){this._disabled=i}_disabled=!1;removed=new De;destroyed=new De;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=g(ce);_injector=g(ue);constructor(){let i=g(Tn);i.load(Tf),i.load(Co),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ag(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(i){(i.keyCode===8&&!i.repeat||i.keyCode===46)&&(i.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(i){return this._getActions().find(t=>{let e=t._elementRef.nativeElement;return e===i||e.contains(i)})}_getActions(){let i=[];return this.editIcon&&i.push(this.editIcon),this.primaryAction&&i.push(this.primaryAction),this.removeIcon&&i.push(this.removeIcon),i}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(i){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{let t=i!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,e,o){if(t&1&&Yp(o,Hi,5)(o,Vi,5)(o,zi,5)(o,ji,5)(o,Hi,5)(o,zi,5)(o,Vi,5)(o,ji,5),t&2){let a;rD(a=oD())&&(e.leadingIcon=a.first),rD(a=oD())&&(e.editIcon=a.first),rD(a=oD())&&(e.trailingIcon=a.first),rD(a=oD())&&(e.removeIcon=a.first),rD(a=oD())&&(e._allLeadingIcons=a),rD(a=oD())&&(e._allTrailingIcons=a),rD(a=oD())&&(e._allEditIcons=a),rD(a=oD())&&(e._allRemoveIcons=a)}},viewQuery:function(t,e){if(t&1&&Kp(nt,5),t&2){let o;rD(o=oD())&&(e.primaryAction=o.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,e){t&1&&Qp(`keydown`,function(a){return e._handleKeydown(a)}),t&2&&(Jc(`id`,e.id),Gc(`role`,e.role)(`aria-label`,e.ariaLabel),vD(`mat-`+(e.color||`primary`)),rh(`mdc-evolution-chip`,!e._isBasicChip)(`mdc-evolution-chip--disabled`,e.disabled)(`mdc-evolution-chip--with-trailing-action`,e._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,e.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,e.leadingIcon)(`mdc-evolution-chip--with-avatar`,e.leadingIcon)(`mat-mdc-chip-with-avatar`,e.leadingIcon)(`mat-mdc-chip-highlighted`,e.highlighted)(`mat-mdc-chip-disabled`,e.disabled)(`mat-mdc-basic-chip`,e._isBasicChip)(`mat-mdc-standard-chip`,!e._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,e._hasTrailingIcon())(`_mat-animation-noopable`,e._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,YF],highlighted:[2,`highlighted`,`highlighted`,YF],disableRipple:[2,`disableRipple`,`disableRipple`,YF],disabled:[2,`disabled`,`disabled`,YF]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[mh([{provide:qi,useExisting:n}])],ngContentSelectors:Ji,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,e){t&1&&(eD($i),Gp(0,`span`,0),Ci(1,`span`,1)(2,`span`,2),VE(3,Yi,2,0,`span`,3),Ci(4,`span`,4),tD(5),Gp(6,`span`,5),Wc()()(),VE(7,it,2,0,`span`,6)),t&2&&(Jy(3),HE(e.leadingIcon?3:-1),Jy(4),HE(e._hasTrailingIcon()?7:-1))},dependencies:[Qi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Ki=(()=>{class n{_elementRef=g(mt);_changeDetectorRef=g(il);_dir=g(QT,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new W;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(i=>i._onFocus)}get chipDestroyedChanges(){return this._getChipStream(i=>i.destroyed)}get chipRemovedChanges(){return this._getChipStream(i=>i.removed)}get disabled(){return this._disabled}set disabled(i){this._disabled=i,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(i){this._explicitRole=i}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new fi;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(i=>i._hasFocus())}_syncChipsState(){this._chips?.forEach(i=>{i._chipListDisabled=this._disabled,i._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(i){this._originatesFromChip(i)&&this._keyManager.onKeydown(i)}_isValidIndex(i){return i>=0&&i<this._chips.length}_allowFocusEscape(){let i=this._elementRef.nativeElement.tabIndex;i!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=i))}_getChipStream(i){return this._chips.changes.pipe(Ug(null),Ct(()=>Ag(...this._chips.map(i))))}_originatesFromChip(i){let t=i.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ug(this._chips)).subscribe(i=>{let t=[];i.forEach(e=>e._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Fn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(i=>this._skipPredicate(i)),this.chipFocusChanges.pipe(es(this._destroyed)).subscribe(({chip:i})=>{let t=i._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(es(this._destroyed)).subscribe(i=>this._keyManager.withHorizontalOrientation(i))}_skipPredicate(i){return i.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ug(null),es(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(es(this._destroyed)).subscribe(i=>{let e=this._chips.toArray().indexOf(i.chip),o=i.chip._hasFocus(),a=i.chip._hadFocusOnRemove&&this._keyManager.activeItem&&i.chip._getActions().includes(this._keyManager.activeItem),Zi=o||a;this._isValidIndex(e)&&Zi&&(this._lastDestroyedFocusedChipIndex=e)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let i=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[i];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||n)};static ɵcmp=Op({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(t,e,o){if(t&1&&Yp(o,V,5),t&2){let a;rD(a=oD())&&(e._chips=a)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,e){t&1&&Qp(`keydown`,function(a){return e._handleKeydown(a)}),t&2&&Gc(`role`,e.role)},inputs:{disabled:[2,`disabled`,`disabled`,YF],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?0:KF(i)]},ngContentSelectors:tt,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,e){t&1&&(eD(),zc(0,`div`,0),tD(1),Qc())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var Ui=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ji$1({type:n});static ɵinj=or({providers:[gi,{provide:et,useValue:{separatorKeyCodes:[13]}}],imports:[Xf,Y0]})}return n})();function ot(n,p){if(n&1&&(Ci(0,`div`,2),Gp(1,`img`,5),$D(2,`transloco`),Wc()),n&2){let i=JE();Jy(),Up(`alt`,LD(GD(2,3,`cover-image`)))(`ngSrc`,i.imageUrl())}}function ct(n,p){if(n&1&&Gp(0,`mat-card-subtitle`,4),n&2)Up(`innerHTML`,JE().subtitle(),Af)}function rt(n,p){if(n&1&&(Ci(0,`mat-chip`),_D(1),Wc()),n&2){let i=p.$implicit;Jy(),lh(i)}}function dt(n,p){if(n&1&&(Ci(0,`mat-chip-set`),UE(1,rt,2,1,`mat-chip`,null,BE),Wc()),n&2){let i=JE(2);Jy(),GE(i.tagsList())}}function st(n,p){n&1&&(Ci(0,`mat-card-actions`,7)(1,`a`,8)(2,`mat-icon`),_D(3,`open_in_new`),Wc()()())}function lt(n,p){if(n&1&&(Ci(0,`mat-card-footer`)(1,`div`,6),VE(2,dt,3,0,`mat-chip-set`),VE(3,st,4,0,`mat-card-actions`,7),Wc()()),n&2){let i=JE();Jy(),rh(`no-image`,!i.imageUrl()),Jy(),HE(i.tagsList()?2:-1),Jy(),HE(i.url()?3:-1)}}var Wi=class n{title=GF.required();subtitle=GF();imageUrl=GF();description=GF(``);url=GF();tags=GF([]);tagsList=Hi$1(()=>this.tags()??[]);static ɵfac=function(i){return new(i||n)};static ɵcmp=Op({type:n,selectors:[[`pf-text-content`]],inputs:{title:[1,`title`],subtitle:[1,`subtitle`],imageUrl:[1,`imageUrl`],description:[1,`description`],url:[1,`url`],tags:[1,`tags`]},decls:11,vars:13,consts:[[`appearance`,`outlined`,1,`text-card`],[1,`content`],[1,`cover`],[1,`info`],[3,`innerHTML`],[`mat-card-image`,``,`width`,`200`,`height`,`200`,3,`ngSrc`,`alt`],[1,`footer`],[`align`,`end`],[`mat-icon-button`,``]],template:function(i,t){i&1&&(Ci(0,`mat-card`,0)(1,`a`,1),VE(2,ot,3,5,`div`,2),Ci(3,`div`,3)(4,`mat-card-header`)(5,`mat-card-title-group`)(6,`mat-card-title`),Gp(7,`b`,4),Wc(),VE(8,ct,1,1,`mat-card-subtitle`,4),Wc()(),Gp(9,`mat-card-content`,4),VE(10,lt,4,4,`mat-card-footer`),Wc()()()),i&2&&(rh(`no-image`,!t.imageUrl()),Jy(),rh(`no-image`,!t.imageUrl()),Gc(`href`,t.url()||null,Rf)(`target`,t.url()?`_blank`:null),Jy(),HE(t.imageUrl()?2:-1),Jy(),rh(`no-image`,!t.imageUrl()),Jy(4),Up(`innerHTML`,t.title(),Af),Jy(),HE(t.subtitle()?8:-1),Jy(),Up(`innerHTML`,t.description(),Af),Jy(),HE(t.tagsList()||t.url()?10:-1))},dependencies:[aa,Qn,Jn,Xn,ea,ta,na,Kn,Zn,Yn,bc,Ui,V,Ki,Fa,Xe,Ga,A0],styles:[`[_nghost-%COMP%]{--%NS%max-lines: 3}mat-card.text-card[_ngcontent-%COMP%]{height:200px;overflow:hidden;padding:0}mat-card.text-card.no-image[_ngcontent-%COMP%]{height:auto;--%NS%max-lines: 10}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px 1fr;height:100%;max-height:200px;text-decoration:none;color:inherit}mat-card.text-card[_ngcontent-%COMP%]   .content.no-image[_ngcontent-%COMP%]{grid-template-columns:1fr;max-height:100%}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:200px;height:200px;flex-shrink:0}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-inverse-surface)}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-rows:auto 1fr auto;height:100%;max-height:200px}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:0}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info.no-image[_ngcontent-%COMP%]{max-height:100%}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:0;box-sizing:border-box;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--%NS%max-lines);line-clamp:var(--%NS%max-lines);text-overflow:ellipsis;line-height:var(--%NS%mat-sys-body-medium-line-height);max-height:calc(var(--%NS%mat-sys-body-medium-line-height) * var(--%NS%max-lines))}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{align-items:end}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:0;display:flex;flex-direction:row;justify-content:space-between;align-items:end}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mdc-evolution-chip[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{margin-top:0;padding:0;min-height:0}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{align-content:end;padding:0;height:auto}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer.no-image[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mdc-evolution-chip[_ngcontent-%COMP%]{margin-top:1rem}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer.no-image[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{margin-top:1rem}@media(max-width:930px){[_nghost-%COMP%]{--%NS%max-lines: 10}mat-card.text-card[_ngcontent-%COMP%]{height:auto}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-height:100%;grid-template-rows:100px 1fr;grid-template-columns:1fr}mat-card.text-card[_ngcontent-%COMP%]   .content.no-image[_ngcontent-%COMP%]{grid-template-rows:1fr}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:100%;height:100px}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{max-height:100%;display:flex;flex-direction:column}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mdc-evolution-chip[_ngcontent-%COMP%]{margin-top:1rem}mat-card.text-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{margin-top:1rem}}`]})};export{Wi as i,Ui as n,V as r,Ki as t};