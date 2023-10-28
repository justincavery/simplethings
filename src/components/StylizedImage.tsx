import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

const shapes = [
  {
    width: 125,
    height: 117,
    path: 'm75,0h36.99c5.52,0,10,4.48,10,10v97c0,5.52-4.48,10-10,10H32c-5.52,0-10-4.47-10-10h0c0-5.53,4.48-10,10-10h52c3.31,0,6-2.69,6-6h0c0-3.31-2.69-6-6-6h-27c-5.52,0-10-4.47-10-10h0c0-5.53,4.48-10,10-10h12.49c3.59,0,6.5-2.91,6.5-6.5h0c0-3.59-2.91-6.5-6.5-6.5H10.01C4.48,52,0,47.52,0,41.99h0c0-5.52,4.47-9.99,9.99-9.99h80.01c3.31,0,6-2.69,6-6h0c0-3.31-2.69-6-6-6h-15.01c-5.52,0-10-4.47-10-10h0C65,4.48,69.48,0,75,0Z'
  },
  {
    width: 125,
    height: 117,
    path: 'm32.03,117.11h80.08c5.53,0,10.01-4.48,10.01-10.01V10.01c0-5.53-4.48-10.01-10.01-10.01h-37.03c-5.53,0-10.01,4.48-10.01,10.01s4.48,10,10,10h15.02c3.32,0,6,2.69,6,6s-2.69,6.01-6.01,6.01H10c-5.52,0-10,4.48-10,10s4.49,10.02,10.02,10.02h59.54c3.59,0,6.5,2.91,6.5,6.5s-2.91,6.51-6.51,6.51h-12.51c-5.53,0-10.01,4.48-10.01,10.01s4.48,10,10,10h27.03c3.32,0,6.01,2.69,6.01,6.01s-2.69,6.01-6.01,6.01h-52.04c-5.53,0-10.01,4.48-10.01,10.01s4.48,10,10,10Z,m44.04,20.02c5.53,0,10.01-4.48,10.01-10.01S49.57,0,44.04,0h-24.02c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h24.02Z,m36.03,75.07c0-5.53-4.48-10.01-10.01-10.01h-12.01c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h12.01c5.53,0,10.01-4.48,10.01-10.01Z'
  },
  {
    width: 150,
    height: 150,
    path: 'm134.38,0H14.18C6.35,0,0,6.35,0,14.18v120.2c0,7.83,6.35,14.18,14.18,14.18h120.2c7.83,0,14.18-6.35,14.18-14.18V14.18c0-7.83-6.35-14.18-14.18-14.18ZM33.28,15.78h24c5.52,0,10,4.48,10,10s-4.48,10-10,10h-24c-5.52,0-10-4.48-10-10s4.48-10,10-10Zm-16,75c0-5.52,4.48-10,10-10h12c5.52,0,10,4.48,10,10s-4.48,10-10,10h-12c-5.52,0-10-4.48-10-10Zm118,32c0,5.52-4.48,10-10,10H45.27c-5.52,0-10-4.47-10-10s4.48-10,10-10h52c3.31,0,6-2.69,6-6s-2.69-6-6-6h-27.01c-5.52,0-9.99-4.47-9.99-9.99s4.48-10.01,10.01-10.01h12.49c3.59,0,6.5-2.91,6.5-6.5s-2.91-6.5-6.5-6.5H23.29c-5.53,0-10.01-4.48-10.01-10.01s4.47-9.99,9.99-9.99h80.01c3.31,0,6-2.69,6-6s-2.69-6-6-6h-15.01c-5.52,0-10-4.47-10-10s4.48-10,10-10h36.99c5.52,0,10,4.48,10,10v97Z'
  },
]


type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  shape = 0,
  className,
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  let id = useId()
  let { width, height, path } = shapes[shape]

  return (
    <div
      className={clsx(
        className,
        'relative flex aspect-[719/680] w-full grayscale',
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/0"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
