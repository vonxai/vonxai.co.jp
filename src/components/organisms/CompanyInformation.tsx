import React from 'react'

export const CompanyInformation = () => {
  return (
    <dl className="flex flex-col my-10 text-2xl font-light md:text-lg">
      <div className="flex items-center h-16 border-solid	border-gray-200	border-b">
        <dt className="flex-1">
          社名
        </dt>
        <dd className="flex-1">
          vonxai合同会社
        </dd>
      </div>
      <div className="flex items-center h-16 border-solid	border-gray-200	border-b">
        <dt className="flex-1">
          本社所在地
        </dt>
        <dd className="flex-1">
          東京都渋谷区
        </dd>
      </div>
      <div className="flex items-center h-16 border-solid	border-gray-200	border-b">
        <dt className="flex-1">
          最高経営責任者
        </dt>
        <dd className="flex-1">
          夏目佳明
        </dd>
      </div>
      <div className="flex items-center h-16 border-solid	border-gray-200	border-b">
        <dt className="flex-1">
          設立
        </dt>
        <dd className="flex-1">
          2022年07月01日
        </dd>
      </div>
      <div className="flex items-center h-16 border-solid	border-gray-200	border-b">
        <dt className="flex-1">
          資本金
        </dt>
        <dd className="flex-1">
          1百万円
        </dd>
      </div>
    </dl>
  )
}
