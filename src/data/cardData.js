export const createGoldenCards = () => {
  const goldenCards = [

    // 양주 획득 (UR)
    { id: 'ur-1', type: '양주', content: '축하드립니다 !', effect: '양주' },

    // 비밀번호 다수 공개 (SSR)
    { id: 'legendary-1', type: '비밀번호 공개', content: '1번 상자의 비밀번호는 16__? 이다.', effect: '16__' },
    { id: 'legendary-2', type: '비밀번호 공개', content: '2번 상자의 비밀번호는 92__? 이다.', effect: '92__' },
    { id: 'legendary-3', type: '비밀번호 공개', content: '원하는 상자의 비밀번호 앞에 두 자리 획득', effect: 'nn__' },
    { id: 'legendary-4', type: '비밀번호 공개', content: '랜덤한 두 개의 상자 비밀번호 한 자리 공개', effect: 'n___, n___' },
    { id: 'legendary-5', type: '비밀번호 공개', content: '5번 상자의 비밀번호를 공개하지만, 한 자리만 숨겨진 상태', effect: '737_' },
    { id: 'legendary-7', type: '비밀번호 공개', content: '원하는 상자의 비밀번호 앞 두 자리 획득', effect: 'nn' },
    { id: 'legendary-9', type: '비밀번호 공개', content: '원하는 상자의 비밀번호를 두 자리 획득', effect: 'nn' },
    
    // 비밀번호 유추 (SR)
    { id: 'hint-1', type: '열쇠 힌트', content: '1번 상자 맨 앞자리 번호 알기', effect: '1___' },
    { id: 'hint-2', type: '열쇠 힌트', content: '2번 상자 두 번째 번호 알기', effect: '_2__' },
    { id: 'hint-3', type: '열쇠 힌트', content: '3번 상자 세 번째 번호 알기', effect: '__7_' },
    { id: 'hint-4', type: '열쇠 힌트', content: '4번 상자 네 번째 번호 알기', effect: '___3' },
    { id: 'hint-5', type: '열쇠 힌트', content: '5번 상자에는 n이 들어갑니다', effect: '7___' },
    { id: 'hint-6', type: '열쇠 힌트', content: '6번 상자에는 n이 들어가지 않습니다', effect: '비밀번호 일부 제한 <5>' },
    { id: 'hint-7', type: '열쇠 힌트', content: '원하는 짝수 번호 상자의 맨 앞자리 공개', effect: '9___, 0___, 8___, 4___, 2___' },
    { id: 'hint-8', type: '열쇠 힌트', content: '홀수 번호 상자의 네 번째 번호 공개', effect: '___1, ___5, ___9, ___5, ___9' },
    { id: 'hint-9', type: '열쇠 힌트', content: '비밀번호의 합이 짝수인 상자의 두 번째 자리 공개', effect: '_6__, _2__, _3__, _4__, _9__' },
    { id: 'hint-10', type: '열쇠 힌트', content: '1번 상자의 비밀번호에 n이 포함됩니다', effect: '_6__' },
    { id: 'hint-11', type: '열쇠 힌트', content: '2번 상자의 비밀번호에 n이 포함되지 않습니다', effect: '비밀번호 일부 제한 <0>' },
    { id: 'hint-12', type: '열쇠 힌트', content: '3번 상자의 비밀번호 중 두 개의 숫자 공개', effect: '3_7_' },
    { id: 'hint-13', type: '열쇠 힌트', content: '짝수 번호 상자의 두 번째 자리와 네 번째 자리 공개', effect: '_2_8, _4_0, _9_2, _5_5, _7_5' },
    { id: 'hint-14', type: '열쇠 힌트', content: '5번 상자의 비밀번호에서 홀수 숫자만 공개', effect: '7_7_' },
    { id: 'hint-15', type: '열쇠 힌트', content: '모든 상자의 비밀번호 네 번째 자리 중 하나 랜덤 공개', effect: '___1, ___8, ___5, ___3, ___9, ___0, ___5, ___9, ___2, ___5' },
    { id: 'hint-16', type: '열쇠 힌트', content: '9번 상자의 비밀번호에서 가장 작은 숫자 공개', effect: '__4_' },
    { id: 'hint-17', type: '열쇠 힌트', content: '10번 상자의 비밀번호 중 중복된 숫자가 있다면 하나 공개', effect: '_7__' },
    { id: 'hint-18', type: '열쇠 힌트', content: '1번 상자의 첫 번째와 네 번째 숫자는 동일합니다.', effect: '1__1' },
    { id: 'hint-19', type: '열쇠 힌트', content: '2번 상자의 첫 번째 숫자와 네 번째 숫자를 공개합니다.', effect: '9__8' },
    { id: 'hint-20', type: '열쇠 힌트', content: '3번 상자의 첫 번째와 두 번째 숫자는 같은 수입니다.', effect: '33__' },
    { id: 'hint-21', type: '열쇠 힌트', content: '4번 상자의 첫 번째 숫자와 네 번째 숫자를 공개합니다.', effect: '0__3' },
    { id: 'hint-22', type: '열쇠 힌트', content: '5번 상자의 첫 번째와 세 번째 숫자는 n입니다.', effect: '7_7_' },
    { id: 'hint-23', type: '열쇠 힌트', content: '6번 상자의 첫 번째 숫자와 네 번째 숫자를 공개합니다.', effect: '8__0' },
    { id: 'hint-24', type: '열쇠 힌트', content: '7번 상자의 첫 번째 숫자와 세 번째 숫자를 공개합니다.', effect: '7_4_' },
    { id: 'hint-25', type: '열쇠 힌트', content: '8번 상자의 첫 번째와 두 번째 숫자는 동일합니다.', effect: '44__' },
    { id: 'hint-26', type: '열쇠 힌트', content: '9번 상자의 두 번째 숫자를 공개합니다.', effect: '_9__' },
    { id: 'hint-27', type: '열쇠 힌트', content: '10번 상자의 네 번째 숫자를 공개합니다.', effect: '___5' },
    { id: 'hint-28', type: '열쇠 힌트', content: '1번 상자의 두 번째 숫자와 세 번째 숫자의 차이는 n입니다.', effect: '비밀번호 일부 제한 <1>' },
    { id: 'hint-29', type: '열쇠 힌트', content: '2번 상자의 첫 번째와 두 번째 숫자의 곱은 n입니다.', effect: '비밀번호 일부 제한 <18>' },
    { id: 'hint-30', type: '열쇠 힌트', content: '3번 상자의 모든 숫자는 ㅁㅁ입니다.', effect: '비밀번호 일부 제한 <홀수>' },
    { id: 'hint-31', type: '열쇠 힌트', content: '4번 상자의 두 번째와 세 번째 숫자의 합은 n입니다.', effect: '비밀번호 일부 제한 <7>' },
    { id: 'hint-32', type: '열쇠 힌트', content: '5번 상자에는 숫자 n이 두 번 등장합니다.', effect: '비밀번호 일부 제한 <7>' },
    { id: 'hint-33', type: '열쇠 힌트', content: '6번 상자의 첫 번째와 세 번째 숫자의 차는 n입니다.', effect: '비밀번호 일부 제한 <1>' },
    { id: 'hint-34', type: '열쇠 힌트', content: '7번 상자의 두 번째와 네 번째 숫자의 합은 n입니다.', effect: '비밀번호 일부 제한 <8>' },
    { id: 'hint-35', type: '열쇠 힌트', content: '8번 상자의 첫 번째와 네 번째 숫자의 합은 n입니다.', effect: '비밀번호 일부 제한 <13>' },
    { id: 'hint-36', type: '열쇠 힌트', content: '9번 상자: 네 번째 숫자는 첫 번째 숫자보다 n만큼 큽니다.', effect: '비밀번호 일부 제한 <1>' },
    { id: 'hint-37', type: '열쇠 힌트', content: '10번 상자의 첫 번째와 네 번째 숫자의 합은 n입니다.', effect: '비밀번호 일부 제한 <7>' },
    { id: 'hint-38', type: '열쇠 힌트', content: '2번 상자의 첫 번째 숫자와 네 번째 숫자의 합은 n입니다.', effect: '비밀번호 일부 제한 <17>' },
    { id: 'hint-39', type: '열쇠 힌트', content: '7번 상자의 두 번째 숫자는 n입니다.', effect: '_3__' },
    { id: 'hint-40', type: '열쇠 힌트', content: '10번 상자에 중복된 숫자는 모두 n입니다.', effect: '비밀번호 일부 제한 <7>' },


    // 보상 및 벌칙 카드 (R)
    { id: 'reward-1', type: '보상', content: '3코인 지급', effect: '코인 +3' },
    { id: 'reward-2', type: '보상', content: '3코인 지급', effect: '코인 +3' },
    { id: 'reward-3', type: '보상', content: '3코인 지급', effect: '코인 +3' },

    { id: 'reward-4', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-5', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-6', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },

    { id: 'reward-7', type: '보상', content: '인물 사진 맞히기 하고 서명 받아오면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-8', type: '보상', content: '인물 사진 맞히기 하고 서명 받아오면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-9', type: '보상', content: '인물 사진 맞히기 하고 서명 받아오면 5코인 획득', effect: '코인 +5' },

    { id: 'reward-10', type: '보상', content: '15코인 지급', effect: '코인 +15' },
    { id: 'reward-11', type: '보상', content: '15코인 지급', effect: '코인 +15' },
    { id: 'reward-12', type: '보상', content: '15코인 지급', effect: '코인 +15' },

    { id: 'reward-13', type: '보상', content: '우리 다음 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-14', type: '보상', content: '우리 다음 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-15', type: '보상', content: '우리 다음 조한테 5코인 뺏어오기', effect: '코인 +5' },

    { id: 'reward-16', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-17', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },
    { id: 'reward-18', type: '보상', content: '원하는 조한테 5코인 뺏어오기', effect: '코인 +5' },

    { id: 'reward-19', type: '보상', content: '10코인 지급', effect: '코인 +10' },
    { id: 'reward-20', type: '보상', content: '10코인 지급', effect: '코인 +10' },
    { id: 'reward-21', type: '보상', content: '10코인 지급', effect: '코인 +10' },

    { id: 'reward-22', type: '보상', content: '줄줄이 말해요 하고 인증하면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-23', type: '보상', content: '줄줄이 말해요 하고 인증하면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-24', type: '보상', content: '줄줄이 말해요 하고 인증하면 5코인 획득', effect: '코인 +5' },

    { id: 'reward-25', type: '보상', content: '12코인 지급', effect: '코인 +12' },
    { id: 'reward-26', type: '보상', content: '12코인 지급', effect: '코인 +12' },
    { id: 'reward-27', type: '보상', content: '12코인 지급', effect: '코인 +12' },

    { id: 'reward-28', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },
    { id: 'reward-29', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },
    { id: 'reward-30', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },

    { id: 'reward-31', type: '보상', content: '우리 전 조한테 5코인 기부하기', effect: '코인 -5' },
    { id: 'reward-32', type: '보상', content: '우리 전 조한테 5코인 기 부하기', effect: '코인 -5' },
    { id: 'reward-33', type: '보상', content: '우리 전 조한테 5코인 기부하기', effect: '코인 -5' },

    { id: 'reward-34', type: '보상', content: '원하는 조한테 10코인 뺏어오기', effect: '코인 +10' },
    { id: 'reward-35', type: '보상', content: '원하는 조한테 10코인 뺏어오기', effect: '코인 +10' },
    { id: 'reward-36', type: '보상', content: '원하는 조한테 10코인 뺏어오기', effect: '코인 +10' },

    { id: 'reward-37', type: '보상', content: '오징어게임 한번 하고 서명 받아오면 10코인 지급', effect: '코인 +10' },
    { id: 'reward-38', type: '보상', content: '오징어게임 한번 하고 서명 받아오면 10코인 지급', effect: '코인 +10' },
    { id: 'reward-39', type: '보상', content: '오징어게임 한번 하고 서명 받아오면 10코인 지급', effect: '코인 +10' },

    { id: 'reward-40', type: '보상', content: '스태프를 이겨라 하고 인증하면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-41', type: '보상', content: '스태프를 이겨라 하고 인증하면 5코인 획득', effect: '코인 +5' },
    { id: 'reward-42', type: '보상', content: '스태프를 이겨라 하고 인증하면 5코인 획득', effect: '코인 +5' },

    { id: 'reward-43', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },
    { id: 'reward-44', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },
    { id: 'reward-45', type: '보상', content: '원하는 조한테 3코인 뺏어오기', effect: '코인 +3' },
    
    { id: 'reward-46', type: '보상', content: '원하는 조에 5코인 기부하기', effect: '코인 -5' },
    { id: 'reward-47', type: '보상', content: '원하는 조에 5코인 기부하기', effect: '코인 -5' },
    { id: 'reward-48', type: '보상', content: '원하는 조에 5코인 기부하기', effect: '코인 -5' },

    { id: 'reward-49', type: '보상', content: '릴레이 그림 퀴즈 하고 인증하면 10코인 획득', effect: '코인 +10' },
    { id: 'reward-50', type: '보상', content: '릴레이 그림 퀴즈 하고 인증하면 10코인 획득', effect: '코인 +10' },
    { id: 'reward-51', type: '보상', content: '릴레이 그림 퀴즈 하고 인증하면 10코인 획득', effect: '코인 +10' },

    { id: 'reward-52', type: '보상', content: '참참참 이기면 7코인 획득', effect: '코인 +7' },
    { id: 'reward-53', type: '보상', content: '참참참 이기면 7코인 획득', effect: '코인 +7' },
    { id: 'reward-54', type: '보상', content: '참참참 이기면 7코인 획득', effect: '코인 +7' },

    { id: 'reward-55', type: '보상', content: '어떤 상자에는 양주가 들어있습니다.', effect: '팩트' },
    { id: 'reward-56', type: '보상', content: '어떤 상자에는 양주가 들어있습니다.', effect: '팩트' },
    { id: 'reward-57', type: '보상', content: '어떤 상자에는 양주가 들어있습니다.', effect: '팩트' },

    { id: 'reward-58', type: '보상', content: '어떤 상자에는 꽝이 들어있습니다.', effect: '팩트' },
    { id: 'reward-59', type: '보상', content: '어떤 상자에는 꽝이 들어있습니다.', effect: '팩트' },
    { id: 'reward-60', type: '보상', content: '어떤 상자에는 꽝이 들어있습니다.', effect: '팩트' },
    

    { id: 'penalty-1', type: '벌칙', content: '2코인 지불', effect: '코인 -2' },
    { id: 'penalty-2', type: '벌칙', content: '2코인 지불', effect: '코인 -2' },
    { id: 'penalty-3', type: '벌칙', content: '2코인 지불', effect: '코인 -2' },

    { id: 'penalty-4', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },
    { id: 'penalty-5', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },
    { id: 'penalty-6', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },

    { id: 'penalty-7', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },
    { id: 'penalty-8', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },
    { id: 'penalty-9', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },

    { id: 'penalty-10', type: '벌칙', content: '10코인 지불', effect: '코인 -10' },
    { id: 'penalty-11', type: '벌칙', content: '10코인 지불', effect: '코인 -10' },
    { id: 'penalty-12', type: '벌칙', content: '10코인 지불', effect: '코인 -10' },

    { id: 'penalty-13', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },
    { id: 'penalty-14', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },
    { id: 'penalty-15', type: '벌칙', content: '5코인 지불', effect: '코인 -5' },

    { id: 'penalty-16', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },
    { id: 'penalty-17', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },
    { id: 'penalty-18', type: '벌칙', content: '3코인 지불', effect: '코인 -3' },

    { id: 'penalty-19', type: '벌칙', content: '1코인 지불', effect: '코인 -1' },
    { id: 'penalty-20', type: '벌칙', content: '1코인 지불', effect: '코인 -1' },
    { id: 'penalty-21', type: '벌칙', content: '1코인 지불', effect: '코인 -1' },


    { id: 'challenge-1', type: '도전', content: '오징어게임 한번 하고 서명 받아오기(성공 시 5코인 획득, 실패 시 5코인 차감)', effect: '성공 시 코인 +5 / 실패 시 코인 -5' },
    { id: 'challenge-2', type: '도전', content: '오징어게임 한번 하고 서명 받아오기(성공 시 5코인 획득, 실패 시 5코인 차감)', effect: '성공 시 코인 +5 / 실패 시 코인 -5' },
    { id: 'challenge-3', type: '도전', content: '오징어게임 한번 하고 서명 받아오기(성공 시 5코인 획득, 실패 시 5코인 차감)', effect: '성공 시 코인 +5 / 실패 시 코인 -5' },

    { id: 'challenge-4', type: '도전', content: '스태프를 이겨라 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-5', type: '도전', content: '스태프를 이겨라 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-6', type: '도전', content: '스태프를 이겨라 하고 서명 받아오기', effect: '도전 과제' },

    { id: 'challenge-7', type: '도전', content: '학생회장님이랑 참참참 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-8', type: '도전', content: '학생회장님이랑 참참참 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-9', type: '도전', content: '학생회장님이랑 참참참 하고 서명 받아오기', effect: '도전 과제' },

    { id: 'challenge-10', type: '도전', content: '학생회장님한테 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-11', type: '도전', content: '학생회장님한테 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-12', type: '도전', content: '학생회장님한테 서명 받아오기', effect: '도전 과제' },

    { id: 'challenge-13', type: '도전', content: '학생회장님이랑 가위바위보 이기고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-14', type: '도전', content: '학생회장님이랑 가위바위보 이기고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-15', type: '도전', content: '학생회장님이랑 가위바위보 이기고 서명 받아오기', effect: '도전 과제' },

    { id: 'challenge-16', type: '도전', content: '사무차장이랑 가위바위보 이기면 10코인 획득', effect: '코인 +10' },
    { id: 'challenge-17', type: '도전', content: '사무차장이랑 가위바위보 이기면 10코인 획득', effect: '코인 +10' },
    { id: 'challenge-18', type: '도전', content: '사무차장이랑 가위바위보 이기면 10코인 획득', effect: '코인 +10' },

    { id: 'challenge-19', type: '도전', content: '가위바위보 이기면 10코인 획득, 지면 5코인 지불', effect: '성공 시 코인 +10 / 실패 시 코인 -5' },
    { id: 'challenge-20', type: '도전', content: '가위바위보 이기면 10코인 획득, 지면 5코인 지불', effect: '성공 시 코인 +10 / 실패 시 코인 -5' },
    { id: 'challenge-21', type: '도전', content: '가위바위보 이기면 10코인 획득, 지면 5코인 지불', effect: '성공 시 코인 +10 / 실패 시 코인 -5' },

    { id: 'challenge-22', type: '도전', content: '일심동체 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-23', type: '도전', content: '일심동체 하고 서명 받아오기', effect: '도전 과제' },
    { id: 'challenge-24', type: '도전', content: '일심동체 하고 서명 받아오기', effect: '도전 과제' }
  ];
  
  return goldenCards;
};

export const createCardRarities = () => {
  return {
    UR: { name: 'UR', prob: 0.001, color: 'gold' },
    SSR: { name: 'SSR', prob: 0.015, color: '#ff1493' },
    SR: { name: 'SR', prob: 0.164, color: '#1e90ff' },
    R: { name: 'R', prob: 0.82, color: '#a9a9a9' }
  };
};