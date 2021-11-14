import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => (
  <ContentLoader 
        viewBox="0 0 300 450"
        height={400}
        width={500}     
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"   
        {...props}>
        <rect x="0" y="0" rx="10" ry="10" width="300" height="180" />
        <rect x="4" y="190" rx="10" ry="10" width="100" height="30" />
        <rect x="200" y="200" rx="10" ry="10" width="80" height="20" />
        <rect x="4" y="240" rx="3" ry="3" width="300" height="20" />
        <rect x="4" y="265" rx="3" ry="3" width="274" height="20" />
        <rect x="4" y="290" rx="3" ry="3" width="300" height="20" />
        <rect x="4" y="315" rx="3" ry="3" width="274" height="20" />
        <rect x="4" y="340" rx="3" ry="3" width="250" height="20" />
        <rect x="105" y="390" rx="5" ry="5" width="80" height="30" />
  </ContentLoader>
)
export default Loader