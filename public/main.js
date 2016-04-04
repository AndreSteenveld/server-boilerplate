import "ng-admin/build/ng-admin.min.css!";
import { angular } from "ng-admin";

angular
	.module( "admin", [ "ng-admin" ])
	.config([ "NgAdminConfigurationProvider", function( config ){

		let admin = config.application( "The first admin" );

		config.configure( admin );

	} ]);
