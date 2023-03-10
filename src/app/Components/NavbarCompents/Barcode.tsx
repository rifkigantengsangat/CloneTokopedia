import Image from 'next/image'

export function BarcodeComponent(){
    return(
        <div className="absolute top-9 rounded-md w-[30vw] px-2 py-3 shadow-lg bg-white flex "> 
            <div className="w-3/6 flex items-center justify-center"> 
            <Image src="/iconHome/qr-code.png" width={70} height={70} alt="qrcode" about='aasa' />
            </div>
            <div className="text-md"> 
                Scan this QR or download app from:
            </div>
        </div>
    )
}