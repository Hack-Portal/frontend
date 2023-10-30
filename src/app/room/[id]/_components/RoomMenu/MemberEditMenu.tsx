import { Domain_NowRoomAccounts } from '@/api/@types'

import {
  Avatar,
  Box,
  Checkbox,
  DeleteOutlineOutlinedIcon,
  Divider,
  FormControl,
  FormControlLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from '@/lib/mui/muiRendering'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'

type Props = {
  anchorEl: HTMLElement | null
  isMenuOpened: boolean
  handleCloseMenu: () => void
  handleConfirm: () => void
  members?: Domain_NowRoomAccounts[]
  isConfirm: boolean
}
export const MemberEditMenu = (props: Props) => {
  const {
    anchorEl,
    members,
    isConfirm,
    isMenuOpened,
    handleCloseMenu,
    handleConfirm,
  } = props

  const { handleSubmit, control } = useForm()

  const handleMemberDecide = () => {
    console.log('メンバー確定')
  }

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpened}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <MenuList
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* member 一覧 */}
          {members?.map((member) => (
            <MenuItem key={member.account_id} sx={{ width: '100%' }}>
              {member.is_owner ? (
                <Box
                  component="form"
                  onSubmit={handleSubmit(handleMemberDecide)}
                >
                  <FormControl>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControlLabel
                          label={
                            <>
                              <ListItemIcon sx={{ mr: 2 }}>
                                <Avatar src={member.icon} />
                              </ListItemIcon>
                              <ListItemText>{member.username}</ListItemText>
                            </>
                          }
                          control={<Checkbox {...field} />}
                        />
                      )}
                    />
                  </FormControl>
                </Box>
              ) : (
                <ListItemIcon sx={{ mr: 2 }}>
                  <Avatar src={member.icon} />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}

          {/* member 一覧 */}

          <Divider />

          <MenuItem onClick={isConfirm ? handleConfirm : handleCloseMenu}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon color="info" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="#1976d2">メンバー確定</Typography>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      {/* submenu */}
      <Divider />
    </>
  )
}
