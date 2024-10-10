/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Chatbot from '@/components/chatbot'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor'

export default function EditPage() {
    const searchParams = useSearchParams()
    const [imageUrl, setImageUrl] = useState<string | null>(null)

    useEffect(() => {
        const image = searchParams.get('image')
        if (image) {
            setImageUrl(decodeURIComponent(image))
        }
    }, [searchParams])

    const handleSave = (editedImageObject: any) => {
        if (editedImageObject && editedImageObject.imageBase64) {
            // Create a download link for the edited image
            const link = document.createElement('a')
            link.href = editedImageObject.imageBase64
            link.download = 'edited-image.png'
            link.click()

            // Close the tab after saving
            window.close()
        }
    }

    if (!imageUrl) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex'>
            <div className="w-2/3 h-screen">
                <FilerobotImageEditor
                    source={imageUrl}
                    onSave={handleSave}
                    onClose={() => window.close()}
                    annotationsCommon={{
                        fill: '#ff0000',
                    }}
                    Text={{ text: 'Text here' }}
                    Rotate={{ angle: 90, componentType: 'slider' }}
                    Crop={{
                        presetsItems: [
                            {
                                titleKey: 'classicTv',
                                descriptionKey: '4:3',
                                ratio: 4 / 3,
                                icon: 'crop-4-3',
                            },
                            {
                                titleKey: 'widescreenTv',
                                descriptionKey: '16:9',
                                ratio: 16 / 9,
                                icon: 'crop-16-9',
                            },
                        ],
                        presetsFolders: [
                            {
                                titleKey: 'socialMedia',
                                groups: [
                                    {
                                        titleKey: 'facebook',
                                        items: [
                                            {
                                                titleKey: 'profile',
                                                width: 180,
                                                height: 180,
                                                descriptionKey: 'fbProfileSize',
                                            },
                                            {
                                                titleKey: 'coverPhoto',
                                                width: 820,
                                                height: 312,
                                                descriptionKey: 'fbCoverPhotoSize',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    }}
                    tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]}
                    defaultTabId={TABS.ANNOTATE}
                    defaultToolId={TOOLS.TEXT}
                    savingPixelRatio={0}
                    previewPixelRatio={0}
                />
            </div>
            <div className='w-1/3'>
                <Chatbot />
            </div>
        </div>
    )
}