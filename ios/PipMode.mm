#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(PipMode, NSObject)

RCT_EXTERN_METHOD(enterPipMode:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
