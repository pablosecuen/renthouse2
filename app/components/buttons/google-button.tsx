"use client";
import { signIn } from "next-auth/react";
import React from "react";
import GoogleButton from "react-google-button";

function GoogleButtonLogin() {
  return <GoogleButton onClick={() => signIn("google")} className="mx-auto" />;
}

export default GoogleButtonLogin;
