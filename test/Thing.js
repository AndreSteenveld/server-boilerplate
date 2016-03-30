import { assert } from "chai";
import Thing from "../src/Thing";

describe( "Thing class ::", function( ){

	it( "should be defined", function( ){

		assert.isDefined( Thing, "Thing was not defined" );

	});

	it( "should be constructable", function( ){

		let instance = new Thing( );
		assert.instanceOf( instance, Thing, "The instance is not an instance of Thing" );

	});

	it( "should have some methods and properties", function( ){

		assert.property( Thing, "property", "Thing has no static property 'property'" );
		assert.property( Thing, "method", "Thing has no static method 'method'" );

		let instance = new Thing( );

		assert.property( instance, "property", "Instance has no property 'property'" );
		assert.property( instance, "method", "Instance has no method 'method'" );

	});

	it( "should have a method which returns property", function( ){

		let instance = new Thing( );

		let static_value   = Thing.method( ),
			instance_value = instance.method( );

		assert.equal( static_value, Thing.property, "Value is not the same as Thing.property" );
		assert.equal( instance_value, instance.property, "Value is not the same as instance.value" );

	});

});
