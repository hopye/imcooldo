/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"S2gUmsiaRxMEN7vM3tz1G76JUrND1DiP"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"Z7L4esOKhdqQIU87cWq6Djkw6pdbX60j"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"iqDoz9Nr2xy9x5w6NlZMYx4NiJL7RR6u"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"ZiANX8Vmo68cGGdaxCRvNcCObam5XAzR"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"4gYzOxipIuCs8dg54J3im33Rg4TYOsRm"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"VRYutKjQnhgST1B012gogKCwyYzJOaK3"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end