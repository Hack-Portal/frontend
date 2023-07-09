import React, { useState } from 'react'
import { Button, Modal, Grid, Box, Typography } from '@mui/material'
import {
  JavaScriptFrameworkTag,
  PythonFrameworkTag,
} from './StackTags/Framework'

const Stack = [
  { id: 1, name: 'Python' },
  { id: 2, name: 'JavaScript' },
  // ...
]

const FrameworkComponents = {
  1: PythonFrameworkTag,
  2: JavaScriptFrameworkTag,
  // ...
}

export const ModalWindow = () => {
  //modalの出し入れ
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [selectetIds, setselectetIds] = useState<number[]>([])
  const selectItem = (id: number) => {
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

  return (
    <>
      <div>
        {/* modalを出す */}
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 700,
              height: 500,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              sx={{ mt: 3, mb: 2, textAlign: 'center' }}
              variant="h6"
              component="h2"
            >
              技術スタックを選択してください
            </Typography>
            {/* 言語 */}

            <Grid container spacing={2} xs={12} sx={{ textAlign: 'center' }}>
              {Stack.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <Button onClick={() => selectItem(item.id)}>
                    {item.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Typography
              sx={{ mb: 3, mt: 5, textAlign: 'center' }}
              variant="h6"
              component="h3"
            >
              フレームワーク
            </Typography>
            <Grid sx={{ mb: 3.5, mt: 3.5 }}>
              {selectetIds.map((id) =>
                React.createElement(FrameworkComponents[id]),
              )}
            </Grid>
          </Box>
        </Modal>
      </div>
    </>
  )
}
