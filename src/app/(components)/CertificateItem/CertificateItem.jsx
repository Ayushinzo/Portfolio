import React from 'react'
import './_CertificateItem.scss'
import { memo } from 'react'

function CertificateItem({ item }) {
    return (
        <div className='certificate-item'>
            <h1 className='organization'>{item.organization}</h1>
            <hr />
            <p className='cer-name'><b>{item.cerName}</b></p>
            <p className='description'>{item.description}</p>
            <div className='cer-footer'>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>View</a>
                <i>{new Date(item.date).toLocaleDateString()}</i>
            </div>
        </div>
    )
}

export default memo(CertificateItem)