/* eslint-disable */
import { useState } from 'react';
import * as S from './layoutHeader.styles';
import MyPageModal from '../../modals/myPage/myPageModal';
import Tooltip from '../../utills/tooltip/tooltip';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMyInfo } from 'src/apis/cheolmin-api/apis';

const Header = () => {
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { data: profile } = useQuery('myInfo', getMyInfo);

  const onClickMyProfile = () => {
    setIsActiveModal((prev) => !prev);
  };

  const onClickLogo = () => {
    navigate('/main');
  };

  return (
    <S.CalendarContainerDiv>
      <S.HeaderContainerDiv>
        {isActiveModal && <MyPageModal onClick={onClickMyProfile} />}
        <S.CalenderHeaderDiv>
          <S.LogoBoxDiv>
            <div style={{ display: 'flex' }}>
              <S.LogoImg
                onClick={onClickLogo}
                src='https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/logo_final.png'
                rel='preload'
                alt='로고'
              />
            </div>
            <Tooltip message='마이페이지'>
              <S.StyledHoverTapButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClickMyProfile}
              >
                {profile?.data?.profileImg && (
                  <S.AvatarSizeImg src={profile?.data?.profileImg} alt='기본' />
                )}
                {!profile?.data?.profileImg && (
                  <S.AvatarSizeImg
                    src='https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/avatar.png'
                    alt='기본'
                    rel='preload'
                  />
                )}
              </S.StyledHoverTapButton>
            </Tooltip>
          </S.LogoBoxDiv>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          ></div>
        </S.CalenderHeaderDiv>
      </S.HeaderContainerDiv>
    </S.CalendarContainerDiv>
  );
};

export default Header;
