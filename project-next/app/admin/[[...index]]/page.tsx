"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
import shared from '../../../styles/Shared.module.css'

export default function AdminPage(){
    return (
        <div className={`${shared.zIndex}`}>
            <NextStudio config={config}/>
        </div>
    )
}