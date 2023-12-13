'use client'

import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { ComponentProps } from 'react'
import  clientConfig  from "@/sanity/config/client-config"
import { ImageAsset } from 'sanity'

type CustomImageProps = Omit<ComponentProps<typeof Image>, 'src'> & {
  asset: ImageAsset
}

export function SanityImage({ asset, alt, ...props }: CustomImageProps) {
  const imageProps = useNextSanityImage(clientConfig, asset)

  return (
    <Image
      {...imageProps}
      {...props}
      alt={alt}
      width={props.fill ? undefined : imageProps.width}
      height={props.fill ? undefined : imageProps.height}
    />
  )
}