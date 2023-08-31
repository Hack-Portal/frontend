"use client"
import { useMenu } from '@/hooks/useMenu'
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  EditOutlinedIcon,
  PersonAddOutlinedIcon,
  DeleteOutlineOutlinedIcon,
  Divider,
  Typography,
  ButtonBase,
  Avatar,
  Button,
} from '@/lib/mui/muiRendering'
import React, { useState } from 'react'
import { useMenuCheck } from '../_hooks/useMenuCheck'
import { Domain_GetRoomResponse, Domain_HackathonResponses, Domain_NowRoomAccounts } from '@/api/@types'
import { UpdateModalWindow } from './RoomMenu/UpdateModalWindow'

type Props = {
  hackathons?:Domain_HackathonResponses[]
  room?: Domain_GetRoomResponse
  anchorEl: HTMLElement | null
  isOpen: boolean
  handleClose: () => void
  isOwner: boolean
}
export const RoomMenu = (props: Props) => {
  const { isOpen, handleClose, anchorEl, isOwner, room,hackathons } = props
  const  members  = room?.now_member
  const subMenu = useMenu()
  const { text, isCheck, handleCheck } = useMenuCheck(isOwner, isOpen)

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          {isOwner && (
            <>
              <MenuItem onClick={subMenu.handleEdit}>
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>編集</ListItemText>
              </MenuItem>
              <MenuItem>
                <ButtonBase onClick={subMenu.handleOpenMenu}>
                  <ListItemIcon>
                    <PersonAddOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>メンバー確定</ListItemText>
                </ButtonBase>
              </MenuItem>
              {/* submenu */}
              <Menu
                id="basic-menu"
                anchorEl={subMenu.anchorEl}
                open={subMenu.isMenuOpened}
                onClose={subMenu.handleCloseMenu}
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
                <MenuList>
                  {members?.map((member) => (
                    <MenuItem key={member.account_id}>
                      <ListItemIcon sx={{ mr: 1 }}>
                        <Avatar src={member.icon} />
                      </ListItemIcon>
                      <ListItemText>{member.username}</ListItemText>
                      <Button color="info">確定</Button>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              {/* submenu */}
              <Divider />
            </>
          )}
          <MenuItem onClick={handleCheck}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="#d32f2f">{text}</Typography>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      <UpdateModalWindow
        room={room}
        isOpen={subMenu.isOpenedModal}
        handleClose={subMenu.handleCloseModal}
        hackathons={hackathons}
      />
    </>
  )
}
