import AVKit
import React

@objc(PipMode)
class PipMode: NSObject {
    var pipController: AVPictureInPictureController?
    @objc
    static func requiresMainQueueSetup() ->Bool{
      return true
    }

    @objc
    func enterPipMode(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let playerViewController = UIApplication.shared.windows.first?.rootViewController?.presentedViewController as? AVPlayerViewController,
              let player = playerViewController.player else {
            reject("E_NO_PLAYER", "No player view controller available.", nil)
            return
        }

        if #available(iOS 9.0, *) {
            let playerLayer = AVPlayerLayer(player: player)
            let pipController = AVPictureInPictureController(playerLayer: playerLayer)
            pipController?.startPictureInPicture()
            self.pipController = pipController
            resolve("PiP mode started.")
        } else {
            reject("E_UNSUPPORTED", "PiP is only supported on iOS 9.0 and later.", nil)
        }
    }
}
