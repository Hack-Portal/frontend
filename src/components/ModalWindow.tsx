import React, { useState } from 'react'
import { Button, Modal, Grid, Box, Typography } from '@mui/material'
import {
  JavaScriptFrameworkTag,
  PythonFrameworkTag,
  GoFramework,
  CFramework,
  CsharpFramework,
  CppFramework,
  JavaFramework,
  kotlinFramework,
  PHPFramework,
  RustFramework,
  RubyFramework,
  RFramework,
  DataBase,
  Cloud,
  DevOps,
} from './StackTags/Framework'
import { init } from 'next/dist/compiled/@vercel/og/satori'
import { Container } from '@mui/joy'

interface Tags {
  [T: string]: string | number
}
const Stack = [
  { id: 1, name: 'Python' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'Go' },
  { id: 4, name: 'C' },
  { id: 5, name: 'C#' },
  { id: 6, name: 'C++' },
  { id: 7, name: 'Java' },
  { id: 8, name: 'Kotlin' },
  { id: 9, name: 'PHP' },
  { id: 10, name: 'Rust' },
  { id: 11, name: 'Ruby' },
  { id: 12, name: 'R' },
  { id: 13, name: 'DataBase' },
  { id: 14, name: 'Cloud' },
  { id: 15, name: 'Dev Ops' },
  // ...
]

const FrameworkComponents = {
  1: PythonFrameworkTag,
  2: JavaScriptFrameworkTag,
  3: GoFramework,
  4: CFramework,
  5: CsharpFramework,
  6: CppFramework,
  7: JavaFramework,
  8: kotlinFramework,
  9: PHPFramework,
  10: RustFramework,
  11: RubyFramework,
  12: RFramework,
  13: DataBase,
  14: Cloud,
  15: DevOps,
}

export const ModalWindow = () => {
  //modalの出し入れ
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [selectetIds, setselectetIds] = useState<Tags[]>([])
  const selectItem = (id) => {
    setselectetIds((list) => {
      //includesidがlistに含まれているか確認 >> include関数
      //idと一致しないものだけ残す >>filter関数
      if (list.includes(id)) {
        return list.filter((item) => item !== id)
      } else {
        return [...list, id]
      }
    })
  }
  //FrameworkComponentsの関数の中のidを取得
  const selectedStack = Stack.filter((item) => selectetIds.includes(item.id))

  return (
    <>
      <div>
        {/* modalを出す */}
        <Button onClick={handleOpen}>技術スタック選択</Button>
        <Modal
          sx={{ width: '100%', height: '100%' }}
          open={open}
          onClose={handleClose}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '80%',
              height: '80%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            {/* 選択された言語タグを表示 >>上部のリストから表示 */}
            {selectedStack.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  display: 'inline-block',
                  mr: 0.5,
                }}
              >
                {item.name}
              </Typography>
            ))}

            <Typography
              sx={{ mt: 3, mb: 2, textAlign: 'center' }}
              variant="h6"
              component="h2"
            >
              技術スタックを選択してください
            </Typography>
            <Box sx={{ display: 'flex' }}>
              {/* 言語タグ */}
              {Stack.map((item) => (
                <Box key={item.id} sx={{ textAlign: 'center' }}>
                  <Grid
                    onClick={() => selectItem(item.id)}
                    sx={{
                      display: 'inline-block',
                      mr: 1,
                      mb: 2,
                    }}
                  >
                    <Button>{item.name}</Button>
                  </Grid>
                </Box>
              ))}
            </Box>

            {/* フレームワーク */}
            <Typography
              sx={{ mb: 3, mt: 5, textAlign: 'center' }}
              variant="h6"
              component="h3"
            >
              フレームワーク
            </Typography>
            <Grid
              container
              spacing={2}
              xs={20}
              sx={{ display: 'flex', textAlign: 'center' }}
            >
              {selectetIds.map((id, index) => (
                <Grid
                  sx={{
                    display: 'inline-block',
                    mr: 1,
                    mb: 2,
                  }}
                  key={index}
                >
                  <Button>
                    {React.createElement(FrameworkComponents[id])}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Button
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                mb: 2,
                mr: 2,
              }}
              onClick={handleClose}
            >
              close
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  )
}
