import React from 'react'
import Base from './Base'
import { Helmet } from 'react-helmet'

const NotFound = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext} title="404 Not Found">
      <Helmet title="vonxai inc.">
        <meta name="description" content="ソフトウェア開発からDX(デジタルトランスフォーメーション)支援、プロダクトマネジメントまで幅広く柔軟な対応が可能です。お気軽にお問い合わせください。" />
        <link rel="icon" type="image/png" href={`/assets/images/icon.png`} sizes="16x16" />
      </Helmet>
    </Base>
  )
}

export default NotFound
