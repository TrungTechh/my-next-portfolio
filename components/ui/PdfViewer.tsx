"use client";
import { Viewer, Worker, RenderPageProps, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useEffect, useState } from "react";

const PdfViewer = ({ url }: { url: string }) => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });

    return (
        <>
            <div className="h-screen" style={{width: '90vw'}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={url}
                        plugins={[defaultLayoutPluginInstance]}
                        theme={"dark"}
                    />
                </Worker>
            </div>
        </>
    );
};
export default PdfViewer;