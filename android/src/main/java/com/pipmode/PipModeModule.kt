package com.pipmode

import android.app.Activity
import android.app.PictureInPictureParams
import android.os.Build
import android.util.Rational
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class PipModeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    init {
        // Initialization if needed
    }

    override fun getName(): String {
        return NAME
    }

    // Method to enter Picture-in-Picture mode
    @ReactMethod
    fun enterPipMode(promise: Promise) {
        val activity: Activity? = currentActivity

        if (activity == null) {
            promise.reject("E_NO_ACTIVITY", "No current activity found.")
            return
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val aspectRatio = Rational(9, 16) // Set the desired aspect ratio for PiP mode
            val pipBuilder = PictureInPictureParams.Builder()
                .setAspectRatio(aspectRatio)

            activity.enterPictureInPictureMode(pipBuilder.build())
            promise.resolve("Entered PiP mode successfully.")
        } else {
            promise.reject("E_UNSUPPORTED", "PiP mode is not supported on this device.")
        }
    }

    // Method to check if the app is in PiP mode
    @ReactMethod
    fun isInPipMode(promise: Promise) {
        val activity: Activity? = currentActivity

        if (activity == null) {
            promise.reject("E_NO_ACTIVITY", "No current activity found.")
            return
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            promise.resolve(activity.isInPictureInPictureMode)
        } else {
            promise.reject("E_UNSUPPORTED", "PiP mode is not supported on this device.")
        }
    }

    @ReactMethod
    fun isPipSupported(promise: Promise) {
        val pm = reactApplicationContext.packageManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val pipPackage = "android.software.picture_in_picture"

            val isSupported = pm.hasSystemFeature(pipPackage)
            promise.resolve(isSupported)
        } else {
            promise.resolve(false)
        }
    }

    companion object {
        const val NAME = "PipMode"
    }
}
