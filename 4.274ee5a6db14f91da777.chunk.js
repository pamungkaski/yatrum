webpackJsonp([4,11],{1346:function(t,e,i){"use strict";var o=i(0),n=i(18),r=i(6),a=i(20),c=(i.n(a),i(651)),s=(i.n(c),i(321)),p=i(1386),l=i(1383),d=i(1384),u=i(1385),f=i(1387),m=i(647),h=i(646);i.d(e,"TripEditModule",function(){return b});var g=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=[{path:"",component:p.a,resolve:{trip:m.a},canActivate:[h.a]}],b=function(){function t(){}return t=g([i.i(o.NgModule)({declarations:[p.a,l.a,d.a,u.a,f.a],imports:[n.RouterModule.forChild(y),s.a,r.FormsModule,a.CustomFormsModule,r.ReactiveFormsModule,c.CalendarModule]}),v("design:paramtypes",[])],t)}()},1383:function(t,e,i){"use strict";var o=i(648),n=i(156),r=i(645),a=i(6),c=i(0);i.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,i,o){this.formBuilder=t,this.cloudinaryService=e,this.toastyService=i,this.placeFormService=o,this.newPlace=new c.EventEmitter,this.googleSuggestedPlaceName=null}return t.prototype.ngOnInit=function(){var t=this;this.initForm(),this.placeForm.valueChanges.debounceTime(2e3).subscribe(function(e){t.placeForm.valid&&t.onSubmit()})},t.prototype.imageUploaded=function(t){this.placeForm.controls.pictures.push(this.formBuilder.group(t))},t.prototype.removeImage=function(t,e){this.placeForm.controls.pictures.controls[e].setValue({id:t.id,description:t.description,url:t.url,public_id:t.public_id,user_id:t.user_id,_destroy:!0})},t.prototype.onSubmit=function(){var t=this.placeForm.value;this.googleSuggestedPlaceName&&(t.name=this.googleSuggestedPlaceName),this.newPlace.emit(t)},t.prototype.focusFunction=function(t){var e=$(t.target)[0],i=new google.maps.places.Autocomplete(e),o=this;google.maps.event.addListener(i,"place_changed",function(){var t=i.getPlace();o.googleSuggestedPlaceName=t.name})},t.prototype.initForm=function(){this.placeForm=this.placeFormService.initPlace(this.place)},s([i.i(c.Output)(),p("design:type","function"==typeof(e="undefined"!=typeof c.EventEmitter&&c.EventEmitter)&&e||Object)],t.prototype,"newPlace",void 0),s([i.i(c.Input)(),p("design:type",Object)],t.prototype,"place",void 0),t=s([i.i(c.Component)({selector:"tr-add-place",template:i(1443),styles:[i(1416)],changeDetection:c.ChangeDetectionStrategy.OnPush}),p("design:paramtypes",["function"==typeof(l="undefined"!=typeof a.FormBuilder&&a.FormBuilder)&&l||Object,"function"==typeof(d="undefined"!=typeof r.a&&r.a)&&d||Object,"function"==typeof(u="undefined"!=typeof n.a&&n.a)&&u||Object,"function"==typeof(f="undefined"!=typeof o.a&&o.a)&&f||Object])],t);var e,l,d,u,f}()},1384:function(t,e,i){"use strict";var o=i(84),n=i(31),r=i(220),a=i(645),c=i(0);i.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,i,n){var r=this;this.cloudinaryService=t,this.slimLoadingBarService=e,this.renderer=i,this.store=n,this.imageData=new c.EventEmitter,this.imagesToUpload=[],this.totalImagesToUpload=0,this.cloudinaryService.uploading.subscribe(function(t){t?r.slimLoadingBarService.start():r.slimLoadingBarService.complete()}),this.store.select(o.k).subscribe(function(t){return r.loggedInUserId=t})}return t.prototype.ngOnInit=function(){},t.prototype.handleOnChange=function(t){var e=this,i=t.dataTransfer?t.dataTransfer.files:t.target.files,o=[];this.totalImagesToUpload=0;for(var n=/image-*/,r=0;r<i.length;r++)o.push(i[r]);o.forEach(function(t){if(!t.type.match(n))return void alert("Remove non image format files");e.totalImagesToUpload++;var i=new FileReader;i.onload=e.handleReaderLoaded.bind(e),i.readAsDataURL(t)})},t.prototype.handleReaderLoaded=function(t){var e=t.target,i=e.result;this.uploadMedia(i)},t.prototype.uploadMedia=function(t){var e=this,i=this.cloudinaryService.uploadPlacePicture(t,this.totalImagesToUpload);i.subscribe(function(t){e.imageData.emit({id:null,description:"",url:t.url,public_id:t.public_id,user_id:e.loggedInUserId,_destroy:!1})})},t.prototype.showImageBrowseDlg=function(){var t=new MouseEvent("click",{bubbles:!0});this.renderer.invokeElementMethod(this.fileInput.nativeElement,"dispatchEvent",[t])},t.prototype.ngOnDestory=function(){},s([i.i(c.Output)(),p("design:type",Object)],t.prototype,"imageData",void 0),s([i.i(c.ViewChild)("fileInput"),p("design:type","function"==typeof(e="undefined"!=typeof c.ElementRef&&c.ElementRef)&&e||Object)],t.prototype,"fileInput",void 0),t=s([i.i(c.Component)({selector:"tr-image-upload",template:i(1444),styles:[i(1417)],changeDetection:c.ChangeDetectionStrategy.OnPush}),p("design:paramtypes",["function"==typeof(l="undefined"!=typeof a.a&&a.a)&&l||Object,"function"==typeof(d="undefined"!=typeof r.a&&r.a)&&d||Object,"function"==typeof(u="undefined"!=typeof c.Renderer&&c.Renderer)&&u||Object,"function"==typeof(f="undefined"!=typeof n.a&&n.a)&&f||Object])],t);var e,l,d,u,f}()},1385:function(t,e,i){"use strict";var o=i(0);i.d(e,"a",function(){return a});var n=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=n([i.i(o.Component)({selector:"tr-new-place",template:i(1445),styles:[i(1418)],changeDetection:o.ChangeDetectionStrategy.OnPush}),r("design:paramtypes",[])],t)}()},1386:function(t,e,i){"use strict";var o=i(648),n=i(650),r=i(156),a=i(118),c=i(0),s=i(84),p=i(31),l=i(18),d=i(6);i.d(e,"a",function(){return m});var u=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(t,e,i,o,n,r,a){var c=this;this.formBuilder=t,this.store=e,this.route=i,this.tripService=o,this.toastyService=n,this.tripFormService=r,this.placeFormService=a,this.trip=null,this.totalPlaces=0,this.trip$=this.store.select(s.b),this.isNewTrip=this.checkIfTripIsNew(),this.isNewTrip||this.trip$.subscribe(function(t){return c.trip=t}),this.initForm()}return t.prototype.ngOnInit=function(){},t.prototype.checkIfTripIsNew=function(){return"/trips/new"==this.route.url},t.prototype.initForm=function(){this.isNewTrip?this.initNewTrip():this.initExistingTrip()},t.prototype.initNewTrip=function(){this.tripForm=this.tripFormService.initTrip(),this.addNewPlace()},t.prototype.initExistingTrip=function(){this.tripForm=this.tripFormService.initTrip(this.trip),this.addPlaces()},t.prototype.addPlaces=function(){var t=this;this.trip.places.forEach(function(e,i){t.totalPlaces++,t.tripForm.controls.places.push(t.placeFormService.initPlace(e))})},t.prototype.updatePlace=function(t,e){var i=this;this.tripForm.controls.places.controls[e].controls.name.setValue(t.name),this.tripForm.controls.places.controls[e].controls.review.setValue(t.review),this.tripForm.controls.places.controls[e].controls._destroy.setValue(t._destroy),this.tripForm.controls.places.controls[e].controls.visited_date.setValue(t.visited_date);var o=this.formBuilder.array([]);this.tripForm.controls.places.controls[e].setControl("pictures",o),t.pictures.forEach(function(t){i.tripForm.controls.places.controls[e].controls.pictures.push(i.formBuilder.group(t))})},t.prototype.removePlace=function(t,e){var i=this;if(1==this.totalPlaces)return void this.toastyService.warning({title:"Invalid Trip",msg:"Cannot Delete Last Place"});this.totalPlaces--,this.tripForm.controls.places.controls[e].controls.name.setValue(t.name),this.tripForm.controls.places.controls[e].controls.review.setValue(t.review),this.tripForm.controls.places.controls[e].controls._destroy.setValue(!0),this.tripForm.controls.places.controls[e].controls.visited_date.setValue(t.visited_date);var o=this.formBuilder.array([]);this.tripForm.controls.places.controls[e].setControl("pictures",o),t.pictures.forEach(function(t){i.tripForm.controls.places.controls[e].controls.pictures.push(i.formBuilder.group(t))})},t.prototype.addNewPlace=function(){this.totalPlaces++,this.tripForm.controls.places.push(this.placeFormService.initPlace())},t.prototype.onSubmit=function(){return this.tripForm.valid?void(this.isNewTrip?this.tripService.saveTrip(this.tripForm.value).subscribe():this.tripService.updateTrip(this.tripForm.value).subscribe()):void this.toastyService.warning({title:"Invalid Trip",msg:"Trip must contain Name and atleast One Place"})},t.prototype.validatePlaces=function(t){var e=t.value;return e.forEach(function(t){if(0==t._destroy)return null}),{validatePlaces:"Trip must contain at least one place"}},t=u([i.i(c.Component)({selector:"tr-trip-edit",template:i(1446),styles:[i(1419)],changeDetection:c.ChangeDetectionStrategy.OnPush}),f("design:paramtypes",["function"==typeof(e="undefined"!=typeof d.FormBuilder&&d.FormBuilder)&&e||Object,"function"==typeof(m="undefined"!=typeof p.a&&p.a)&&m||Object,"function"==typeof(h="undefined"!=typeof l.Router&&l.Router)&&h||Object,"function"==typeof(g="undefined"!=typeof a.a&&a.a)&&g||Object,"function"==typeof(v="undefined"!=typeof r.a&&r.a)&&v||Object,"function"==typeof(y="undefined"!=typeof n.a&&n.a)&&y||Object,"function"==typeof(b="undefined"!=typeof o.a&&o.a)&&b||Object])],t);var e,m,h,g,v,y,b}()},1387:function(t,e,i){"use strict";var o=i(0);i.d(e,"a",function(){return a});var n=this&&this.__decorate||function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=n([i.i(o.Component)({selector:"tr-update-place",template:i(1447),styles:[i(1420)],changeDetection:o.ChangeDetectionStrategy.OnPush}),r("design:paramtypes",[])],t)}()},1416:function(t,e){t.exports=".save-button{text-align:right;margin-bottom:13px}input{border:none !important}.place-images{padding:0 20px 20px 20px}.images{position:relative;float:left;margin:0 2% 2% 0}.place{padding:0px !important;border-radius:5px 0 0 0 !important}.place-image-field:hover .remove.icon{opacity:1}.place-image{background:#efe8e8;height:150px;width:200px;-o-object-fit:cover;object-fit:cover;background:#efe8e8;z-index:999}.remove.icon{position:absolute;font-size:2.5em;background-color:rgba(250,250,250,0.85);border-radius:999px;-webkit-transition-duration:0.3s;transition-duration:0.3s;opacity:0;height:50px;width:50px;left:37%;top:31%;box-shadow:0px 0px 10px black}.remove.icon:before{top:30%;position:relative;color:#2C3E50}.form-header{color:#A8B0B8;background-color:#303E52;padding:10px 10px 1px 10px !important;border-radius:5px 0 0 0}.place-name{background:none !important;font-size:1.5rem !important;font-weight:400;color:#A8B0B8 !important}.place-name:focus{background:none !important}.marker.icon{font-size:3rem;margin-right:-1.5rem !important}.place-date-field{position:relative}textarea{font-size:1.5rem !important;min-height:15rem !important;background:none !important;line-height:30px;color:#939799 !important;border:none !important;resize:none !important}.street-view{padding:0 !important;color:#F12732}.street-view .icon{font-size:5rem;padding-top:30px;padding-bottom:50px;width:100%;background:#FAFAFA;cursor:pointer}.street-view .vertical-bar{left:47%;border-right:1px solid #B3B5B7;position:absolute;height:100%}tr-image-upload{float:left;margin:0 2% 2% 0}\n"},1417:function(t,e){t.exports=".add-photo{cursor:pointer;text-align:center;width:200px;height:150px;border-radius:0px !important;position:relative;margin:0 !important}.add-photo .icon{font-size:3.5rem;position:absolute;color:#CBCBCB;left:calc(50% - 2rem);top:calc(50% - 1rem)}\n"},1418:function(t,e){t.exports=""},1419:function(t,e){t.exports=".trip{margin-top:30px}.trip-form{padding:0 !important}.trip-title{color:#939799 !important;font-weight:700;min-height:2em !important;height:2em !important;width:70% !important;font-size:3rem !important;margin-left:-2rem !important}.trip-title:focus{background:none !important}.trip-description{color:#939799 !important;font-size:1.5rem !important;min-height:3rem !important;text-align:justify}.save-button{border-radius:0 !important;float:right;background:#E74C3C;color:white;margin-top:2.3rem}input{border:none !important}textarea{border:none !important;resize:none !important}.place-form{padding-top:0px !important;padding-bottom:0px !important;position:relative}.place-form .place{margin-bottom:50px}.place-form .remove-icon-background{background:white;width:2.2em;position:absolute;right:-13px;z-index:1;height:2.2em;border-radius:20px;top:-6px}.place-form .icon{font-size:4em !important;color:#CBCBCB;position:absolute;right:-35px;top:-5px;z-index:1;cursor:pointer}.trip-form{background:none !important;box-shadow:none !important}.trip-form input{background:none}.trip-form textarea{background:none}.add-place{margin-top:8px;padding:0 !important;color:#F12732}.add-place .icon{cursor:pointer;font-size:4rem;width:100%;background:#FAFAFA;padding-top:23px;padding-bottom:51px}\n"},1420:function(t,e){t.exports=""},1443:function(t,e){t.exports='<div class="ui grid">\n  <div class="two wide column street-view">\n    <i class="street view icon"></i>\n    <div class="vertical-bar"></div>\n  </div>\n  <div class="fourteen wide column ui card place">\n    <form class="ui form" [formGroup]="placeForm">\n      <div class="content form-header">\n        <div class="inline fields">\n          <div class="twelve wide field">\n            <i class="marker big icon"></i>\n            <input\n              class="place-name" type="text" (focus)="focusFunction($event)"\n              formControlName="name" placeholder="Add Place">\n          </div>\n          <div class="four wide field place-date-field">\n            <p-calendar formControlName="visited_date" showTime="true" [showIcon]="true"></p-calendar> \n          </div>\n        </div>\n      </div>  \n      <div class="field">\n        <textarea\n          class="place-review" autosize class="" formControlName="review"\n          placeholder="What\'s so cool about this place?"></textarea>\n      </div>  \n      <div class="field place-images">\n        <tr-image-upload (imageData)="imageUploaded($event)"></tr-image-upload>\n        <span *ngFor="let picture of placeForm.controls[\'pictures\'].value; let i = index" class="images">\n          <span class="place-image-field" *ngIf="!picture._destroy">\n            <img [src]="picture.url | thumbnail:\'w_150,q_75\'" class="place-image">\n            <i class="remove icon" (click)="removeImage(picture, i)"></i>\n          </span>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>'},1444:function(t,e){t.exports='<input #fileInput [hidden]="true" type="file" (change)="handleOnChange($event)" multiple />\n<span class="ui card add-photo" (click)="showImageBrowseDlg()">\n\t<i class="add circle icon"></i>\n</span>'},1445:function(t,e){t.exports="<p>\n  new-place works!\n</p>\n"},1446:function(t,e){t.exports='<div class="trip ui centered grid cards">\n  <div class="trip-form twelve wide column ui card">\n    <form class="ui form" [formGroup]="tripForm">\n      <div class="field">\n        <textarea class="trip-title" autosize type="text" placeholder="Title" formControlName="name"></textarea>\n        <button class="ui big button save-button" (click)="onSubmit()" type="button">Publish</button>\n      </div>\n      <div class="field">\n        <textarea class="trip-description" autosize placeholder="Where is it about?" formControlName="description"></textarea>\n      </div>\n    </form>\n  </div>\n\n  <div *ngFor="let place of tripForm.value.places; let i = index" class="place-form twelve wide right aligned column">\n    <div *ngIf="!place._destroy" class="place">\n      <div class="remove-icon-background"></div>\n      <i class="remove circle icon" (click)="removePlace(place, i)"></i>\n      <tr-add-place [place]="place" (newPlace)="updatePlace($event, i)"></tr-add-place>\n    </div>\n  </div>\n  <div class="twelve wide column">\n    <div class="ui grid">\n      <div class="two wide column add-place" (click)="addNewPlace()">\n        <i class="add circle icon"></i>\n      </div>\n    </div>\n  </div>\n\n</div>\n'},1447:function(t,e){t.exports="<p>\n  update-place works!\n</p>\n"}});
//# sourceMappingURL=4.274ee5a6db14f91da777.bundle.map