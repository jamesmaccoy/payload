'use client'
import React from 'react'

import type { RowFieldProps } from './types.js'

import { useFieldProps } from '../../forms/FieldPropsProvider/index.js'
import { RenderFields } from '../../forms/RenderFields/index.js'
import { withCondition } from '../../forms/withCondition/index.js'
import { fieldBaseClass } from '../shared/index.js'
import './index.scss'
import { RowProvider, useRow } from './provider.js'

export { RowProvider, useRow }

const baseClass = 'row'

const RowField: React.FC<RowFieldProps> = (props) => {
  const { className, fieldMap, forceRender = false } = props

  const { path, readOnly, schemaPath, siblingPermissions } = useFieldProps()

  return (
    <RowProvider>
      <div className={[fieldBaseClass, baseClass, className].filter(Boolean).join(' ')}>
        <RenderFields
          {...{ fieldMap, forceRender, path, readOnly, schemaPath }}
          className={`${baseClass}__fields`}
          fieldMap={fieldMap}
          forceRender={forceRender}
          margins={false}
          permissions={siblingPermissions}
        />
      </div>
    </RowProvider>
  )
}

export const Row = withCondition(RowField)