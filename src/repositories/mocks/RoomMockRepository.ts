import {
  Domain_ListRoomResponse,
  Domain_GetRoomResponse,
  Domain_CreateRoomRequestBody,
  Domain_UpdateRoomRequestBody,
} from '@/api/@types'
import { RoomInterface } from '@/types/RoomInterface'

const mockRoomList: Domain_ListRoomResponse[] = [
  {
    hackathon: {
      hackathon_id: 1,
      expired: '2021-10-10',
      hackathon_name: 'ハッカソン名',
      icon: 'https://picsum.photos/200/300',
    },
    members_frameworks: [
      {
        framework: {
          framework_id: 1,
          framework: 'React',
          icon: 'https://picsum.photos/200/300',
          tech_tag_id: 1,
        },
        count: 1,
      },
      {
        framework: {
          framework_id: 2,
          framework: 'Vue.js',
          icon: 'https://picsum.photos/200/300',
          tech_tag_id: 1,
        },
        count: 2,
      },
    ],
    now_member: [
      {
        username: 'ユーザー名',
        frameworks: [
          {
            framework_id: 1,
            framework: 'React',
            icon: 'https://picsum.photos/200/300',
            tech_tag_id: 1,
          },
        ],
        account_id: '1',
        is_owner: true,
        roles: [
          { role_id: 1, role: 'フロントエンド' },
          { role_id: 2, role: 'バックエンド' },
        ],
        icon: 'https://picsum.photos/200/300',
        tech_tags: [
          {
            tech_tag_id: 1,
            icon: 'https://picsum.photos/200/300',
            language: 'JavaScript',
          },
        ],
      },
      {
        username: 'ユーザー名2',
        frameworks: [
          {
            framework_id: 1,
            framework: 'React',
            icon: 'https://picsum.photos/200/300',
            tech_tag_id: 1,
          },
        ],
        account_id: '2',
        is_owner: false,
        roles: [
          { role_id: 1, role: 'フロントエンド' },
          { role_id: 2, role: 'バックエンド' },
        ],
        icon: 'https://picsum.photos/200/300',
        tech_tags: [
          {
            tech_tag_id: 1,
            icon: 'https://picsum.photos/200/300',
            language: 'JavaScript',
          },
        ],
      },
    ],
    members_tech_tags: [
      {
        count: 1,
        tech_tag: {
          tech_tag_id: 1,
          icon: 'https://picsum.photos/200/300',
          language: 'JavaScript',
        },
      },
      {
        count: 2,
        tech_tag: {
          tech_tag_id: 2,
          icon: 'https://picsum.photos/200/300',
          language: 'TypeScript',
        },
      },
    ],
    rooms: {
      room_id: '1',
      created_at: '2021-10-10',
      is_closing: false,
      member_limit: 10,
      title: 'ルーム名',
    },
  },
  {
    hackathon: {
      hackathon_id: 2,
      expired: '2021-10-10',
      hackathon_name: 'ハッカソン名2',
      icon: 'https://picsum.photos/200/300',
    },
    members_frameworks: [
      {
        framework: {
          framework_id: 1,
          framework: 'React',
          icon: 'https://picsum.photos/200/300',
          tech_tag_id: 1,
        },
        count: 1,
      },
      {
        framework: {
          framework_id: 2,
          framework: 'Vue.js',
          icon: 'https://picsum.photos/200/300',
          tech_tag_id: 1,
        },
        count: 2,
      },
    ],
    now_member: [
      {
        username: 'ユーザー名',
        frameworks: [
          {
            framework_id: 1,
            framework: 'React',
            icon: 'https://picsum.photos/200/300',
            tech_tag_id: 1,
          },
        ],
        account_id: '1',
        is_owner: true,
        roles: [
          { role_id: 1, role: 'フロントエンド' },
          { role_id: 2, role: 'バックエンド' },
        ],
        icon: 'https://picsum.photos/200/300',
        tech_tags: [
          {
            tech_tag_id: 1,
            icon: 'https://picsum.photos/200/300',
            language: 'JavaScript',
          },
        ],
      },
      {
        username: 'ユーザー名2',
        frameworks: [
          {
            framework_id: 1,
            framework: 'React',
            icon: 'https://picsum.photos/200/300',
            tech_tag_id: 1,
          },
        ],
        account_id: '2',
        is_owner: false,
        roles: [
          { role_id: 1, role: 'フロントエンド' },
          { role_id: 2, role: 'バックエンド' },
        ],
        icon: 'https://picsum.photos/200/300',
        tech_tags: [
          {
            tech_tag_id: 1,
            icon: 'https://picsum.photos/200/300',
          },
        ],
      },
    ],
    members_tech_tags: [
      {
        count: 1,
        tech_tag: {
          tech_tag_id: 1,
          icon: 'https://picsum.photos/200/300',
          language: 'JavaScript',
        },
      },
      {
        count: 2,
        tech_tag: {
          tech_tag_id: 2,
          icon: 'https://picsum.photos/200/300',
          language: 'TypeScript',
        },
      },
    ],
    rooms: {
      room_id: '2',
      created_at: '2021-10-10',
      is_closing: false,
      member_limit: 10,
      title: 'ルーム名2',
    },
  },
]
const mockRoom: Domain_GetRoomResponse = {
  description: 'ルームの説明',
  hackathon: {
    hackathon_id: 1,
    expired: '2021-10-10',
    icon: 'https://picsum.photos/200/300',
    link: 'https://example.com',
    name: 'ハッカソン名',
    start_date: '2021-10-10',
    status_tag: [
      {
        status: '開催中',
        status_id: 1,
      },
      {
        status: '開催前',
        status_id: 2,
      },
      {
        status: '終了',
        status_id: 3,
      },
    ],
    term: 10,
  },
  is_closing: false,
  is_status: false,
  member_limit: 10,
  now_member: [
    {
      account_id: '1',
      icon: 'https://picsum.photos/200/300',
      is_owner: true,
      roles: [
        {
          role: 'フロントエンド',
          role_id: 1,
        },
        {
          role: 'バックエンド',
          role_id: 2,
        },
      ],
      tech_tags: [
        {
          icon: 'https://picsum.photos/200/300',
          language: 'JavaScript',
          tech_tag_id: 1,
        },
      ],
      username: 'ユーザー名',
    },
    {
      account_id: '2',
      icon: 'https://picsum.photos/200/300',
      is_owner: false,
      roles: [
        {
          role: 'フロントエンド',
          role_id: 1,
        },
        {
          role: 'バックエンド',
          role_id: 2,
        },
      ],
      tech_tags: [
        {
          icon: 'https://picsum.photos/200/300',
          language: 'JavaScript',
          tech_tag_id: 1,
        },
      ],
      username: 'ユーザー名2',
    },
  ],
  room_id: '1',
  title: 'ルーム名',
}
export class RoomMockRepository implements RoomInterface {
  createChatMessage(
    token: string,
    uid: string,
    roomId: string,
    message: string,
  ): Promise<void> {
    return Promise.resolve()
  }
  fetchAll(token: string): Promise<Domain_ListRoomResponse[]> {
    return Promise.resolve(mockRoomList)
  }
  fetchById(id: string, token: string): Promise<Domain_GetRoomResponse> {
    return Promise.resolve(mockRoom)
  }
  update(
    roomId: string,
    roomInfo: Domain_UpdateRoomRequestBody,
    token: string,
  ): Promise<Domain_GetRoomResponse> {
    return Promise.resolve(mockRoom)
  }
  delete(roomId: string, token: string): Promise<void> {
    return Promise.resolve()
  }
  create(
    roomInfo: Domain_CreateRoomRequestBody,
    token: string,
  ): Promise<Domain_GetRoomResponse> {
    return Promise.resolve(mockRoom)
  }
}
