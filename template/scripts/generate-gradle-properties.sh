#!/usr/bin/env bash

cat  << EOF
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m
android.useAndroidX=true
android.enableJetifier=true
FLIPPER_VERSION=0.125.0
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
newArchEnabled=false
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_STORE_PASSWORD=${MYAPP_UPLOAD_STORE_PASSWORD}
MYAPP_UPLOAD_KEY_ALIAS=${MYAPP_UPLOAD_KEY_ALIAS}
MYAPP_UPLOAD_KEY_PASSWORD=${MYAPP_UPLOAD_KEY_PASSWORD}
EOF
