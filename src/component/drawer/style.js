import Styled from 'styled-components';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const DrawerWrapper = Styled(Drawer)`
 width: 706px!important;
 padding-top:34px;
 padding-left:37px;
 padding-right:33px;
 padding-bottom:26px;
 overflow-x: hidden;

.drawer-header{
      .cross-icon{
        font-size: 16px;
        color:${({ theme }) => theme['link-color']};
        position: absolute;
        top: 10px;
        right: 0px;

      }
    }
 .page-title{
  margin-bottom:0;
  .icon-back{
    font-size:10px;
    color:${({ theme }) => theme['label-color']};
    position: relative;
    top:-4px;
  }
 }
    .cross-icon{
        cursor:pointer;
        margin-right:10px;
    }
    .drawer-bottom{
      padding-top:60px;
      grid-column-gap:36px;
    }
    .drawer-buttons{
      ul{
        li{
          display:inline-block;
          margin-right:18px;
          button{
            margin-bottom:0;
            padding: 7px 23px;
          }
          &:last-of-type{
            margin-right:0;
          }
        }
      }
    }
    .filter-header{
      a{
        text-decoration:none;
        color:${({ theme }) => theme['link-color']};
        margin-right:29px;
      }
 
    }
    .heading{
        margin-top: 6px;
      }
      .select-sponsored{
        margin-top:33px;
      }
      .sponsored-box{
        border-radius:4px;
        padding:8px 11px;
        margin-bottom:24px;
        span{
          max-width:90px;
          line-height:19px;
        }
        &.product{
    border:1px solid ${({ theme }) => theme['malibu-color']};
    }
    &.brand{
    border:1px solid ${({ theme }) => theme['saffron-color']};
    }
    &.video{
    border:1px solid ${({ theme }) => theme['cinnabar-color']};
    }
    &.display{
    border:1px solid ${({ theme }) => theme['dullLavender-color']}; 
    }
      }
    }
  `;
export { DrawerWrapper };
