import AVKit
import React

@objc(PipMode)
class PipMode: NSObject {
    var pipController: AVPictureInPictureController?

    @objc
    func startPiPMode(_ callback: @escaping RCTResponseSenderBlock) {
        guard let rootViewController = UIApplication.shared.windows.first?.rootViewController,
              let playerViewController = rootViewController.presentedViewController as? AVPlayerViewController,
              let player = playerViewController.player else {
            callback(["Error: No player view controller available."])
            return
        }

        if #available(iOS 9.0, *) {
            let playerLayer = AVPlayerLayer(player: player)
            let pipController = AVPictureInPictureController(playerLayer: playerLayer)
            pipController?.startPictureInPicture()
            self.pipController = pipController
            callback([NSNull(), "PiP mode started."])
        } else {
            callback(["Error: PiP is only supported on iOS 9.0 and later."])
        }
    }
}
