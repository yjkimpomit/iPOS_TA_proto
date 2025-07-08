// 함수가 전역에 정의되어야 팝업에서도 호출 가능
function showAlert() {
	alert("준비중입니다.");
}

//
function togglePanel(buttonEl) {
	const $btn = $(buttonEl);
	const $parent = $btn.closest('.toggle-box');
	const $target = $parent.find('[class$="-list"]');
	const $label = $btn.find('.visually-hidden');

	// 리스트 토글
	if (!$parent.hasClass('fixed')) {
		$parent.toggleClass('active');
	} else if ( $parent.hasClass('fixed') ) {
		alert( $parent.find('h3').text() + '가 고정된 상태에서는 닫을 수 없습니다. 고정해제하고 닫아주세요.');
	}

	// 텍스트 토글
	let text = $label.text();
	if (text.includes('열기')) {
		$label.text(text.replace('열기', '닫기'));
	} else {
		$label.text(text.replace('닫기', '열기'));
	}
}

// 
function toggleFixedPanel(buttonEl) {
	const $btn = $(buttonEl);
	const $panel = $btn.closest('.toggle-box');

	$panel.toggleClass('fixed');
	$btn.toggleClass('disabled');

	// 버튼 텍스트 변경 (예: "고정" ↔ "고정해제")
	const $label = $btn.find('.visually-hidden');
	let text = $label.text();
	if (text.includes('고정해제')) {
		$label.text(text.replace('고정해제', '고정'));
	} else {
		$label.text(text.replace('고정', '고정해제'));
	}
}


$(document).ready(function() {

	$('#operationStatus').on('click', function() {
		$('#menuList').removeClass('show');
		$('#toggle-button img').attr('src', '/images/icons/icon-menu-dark.svg').attr('alt', '메뉴 열기');
		$('#dashboard').removeClass('show');
		$('#toggle-dashboard img').attr('src', '/images/icons/icon-dashboard-dark.svg').attr('alt', '대시보드 열기');

		if( $('.operation-status').hasClass('visible') ) {
			// .operation-status에서 'visible' 클래스 제거
			$('.operation-status').removeClass('visible');
			// #operationStatus에서 img의 src와 alt 속성 초기화
			$('#operationStatus img').attr('src', '/images/icons/icon-power.svg').attr('alt', '기타정보 열기');
		} else {
			$('.operation-status').addClass('visible');
			$('#operationStatus img').attr('src', '/images/icons/icon-menu-close-brand.svg').attr('alt', '기타정보 닫기');
		}
    });

});

//3D모델 사용가이드
function closeControlGuide() {
	$('.unity-guide').removeClass('show');
}
function openControlGuide() {
	$('.unity-guide').addClass('show');
}

// 검색박스내 부서검색 팝업
function searchTreePopup(target) {
	//  모달이 닫힐 때 초기화 작업 수행
	$("#searchTreePopup #searchTreeTitle").empty();
	//$("#searchTreePopup #searchTreeContent").empty();

	var title = target.siblings('label').text();

	// 모달 제목 설정
	$("#searchTreeTitle").text(title);

	$("#searchTreePopup").bPopup({
		modalClose: false,
		zIndex: 1060,
		opacity: 0.4,
		speed: 450,
		closeClass: "close",
		onOpen: function() {
			// #searchTreePopup 클래스 추가
			$("#searchTreePopup").addClass('show');
		},
		onClose: function() {
			// 모달이 닫힐 때 초기화 작업 수행
			//$(this).find("#searchTreeTitle").empty();
			//$(this).find("#searchTreeContent").empty();

			$("#searchTreePopup").removeClass('show');
		}
	});
}

// 검색박스내 설비마스터 팝업
function searchItemPopup(target) {
	//  모달이 닫힐 때 초기화 작업 수행
	$("#searchItemPopup #searchItemTitle").empty();
	//$("#searchItemPopup #searchItemContent").empty();

	var title = target.siblings('label').text();

	// 모달 제목 설정
	$("#searchItemTitle").text(title);

	$("#searchItemPopup").bPopup({
		modalClose: false,
		zIndex: 1060,
		opacity: 0.4,
		speed: 450,
		closeClass: "close",
		onOpen: function() {
			// #searchItemPopup 클래스 추가
			$("#searchItemPopup").addClass('show');
		},
		onClose: function() {
			// 모달이 닫힐 때 초기화 작업 수행
			//$(this).find("#searchItemTitle").empty();
			//$(this).find("#searchItemContent").empty();

			$("#searchItemPopup").removeClass('show');
		}
	});
}

// 검색박스내 설비마스터 팝업
function searchFacilityPopup(target) {
	//  모달이 닫힐 때 초기화 작업 수행
	$("#searchFacilityPopup #searchFacilityTitle").empty();
	//$("#searchFacilityPopup #searchFacilityContent").empty();

	var title = target.siblings('label').text();

	// 모달 제목 설정
	$("#searchFacilityTitle").text(title);

	$("#searchFacilityPopup").bPopup({
		modalClose: false,
		zIndex: 1060,
		opacity: 0.4,
		speed: 450,
		closeClass: "close",
		onOpen: function() {
			// #searchFacilityPopup 클래스 추가
			$("#searchFacilityPopup").addClass('show');
		},
		onClose: function() {
			// 모달이 닫힐 때 초기화 작업 수행
			//$(this).find("#searchFacilityTitle").empty();
			//$(this).find("#searchFacilityContent").empty();

			$("#searchFacilityPopup").removeClass('show');
		}
	});
}

// 메뉴링크 및 bPopup 열기 함수
function openPopup(url, target) {
	// 모달이 닫힐 때 초기화 작업 수행
	$("#externalPopup #modalTitle").empty();
	$("#externalPopup #modalBodyContent").empty();

	/* 2024.11.13 yjkim add */
	$('#menuList').removeClass('show');
	$("#toggle-button").attr('aria-expanded', 'false');
	$('#toggle-button img').attr('src', '/images/icons/icon-menu.svg').attr('alt', '메뉴 열기');

	var classesArray = target.data("class");
	var title = target.data("title");
	
	console.log("openPopup=======" +  url + " //// title : " + title + " //// classesArray : " + classesArray);
	// 모달 제목 설정
	$("#modalTitle").text(title);  // 필요하면 주석 해제

	$("#externalPopup").bPopup({
		modalClose: false,
		zIndex: 1050,
		opacity: 0.4,
		speed: 450,
		closeClass: "modal-close, move-to-3D",
		onOpen: function() {
			// #externalPopup에 data-class에서 가져온 클래스 추가
			if (classesArray) {
				$("#externalPopup").addClass(classesArray).addClass('modal fade show external-popup');
				$("#externalPopup .modal-dialog").addClass("modal-fullscreen");
			}

		},
		onClose: function() {
			// 모달이 닫힐 때 초기화 작업 수행
			$(this).closest("#modalTitle").empty();
			$(this).closest("#modalBodyContent").empty();

			$("#externalPopup").removeClass();
			$("#externalPopup").find(".modal-dialog").removeClass("modal-fullscreen");
			
			closeOtherPopups();
		}
	}, function() {
		// AJAX 요청으로 modalContent에 HTML 로드
		$.ajax({
			url: url,  // 원하는 HTML 파일 경로
			dataType: "html",
			success: function(data) {

				// 아래 영역에 가져온 HTML 삽입
				$("#modalBodyContent").html(data);

				// 성공 시 팝업의 위치 설정
				$("#externalPopup").css({
					top: 0
				});

			},
			error: function() {
				alert("Error loading content");
			}
		});
	});	
}

// closeOtherPopups
// 메인 화면에 종속된 모달 이외의 추가로 생성된 팝업 제거
function closeOtherPopups() {
	$('.modal').each(function() {
		const popupId = $(this).attr('id');

		if(popupId !== 'externalPopup' && popupId !== 'mainInstall') {
			
			console.log('제거된 모달: ' + popupId);

			//$(this).bPopup().close();
			$(this).remove();

		}
	});
}

//사이드패널 열고 닫기
let $toggleSides, $modal, $panel; // let으로 선언하여 재할당 가능하게 수정

// 초기화 함수
function resetSidePanel() {
	$modal.addClass('folded').removeClass('unfolded');
	$panel.removeClass('show');
	updateToggleButtonIcon();
	isCollapsed = true;
}

// 열기 함수
function openSidePanel() {
	$modal.removeClass('folded').addClass('unfolded');
	$panel.addClass('show');
	updateToggleButtonIcon();
	isCollapsed = false;
}

// 닫기 함수
function closeSidePanel() {
	$modal.addClass('folded').removeClass('unfolded');
	$panel.removeClass('show');
	updateToggleButtonIcon();
	isCollapsed = true;
}

// 토글 함수
function toggleSidePanel() {
	isCollapsed ? openSidePanel() : closeSidePanel();
}

// 아이콘 업데이트
function updateToggleButtonIcon() {
	if ($panel.hasClass('show')) {
		$toggleSides.attr('title', '설비정보 닫기');
		$toggleSides.removeClass('icon-panel-open');
		$toggleSides.addClass('icon-panel-close');
	} else {
		$toggleSides.attr('title', '설비정보 열기');
		$toggleSides.removeClass('icon-panel-close');
		$toggleSides.addClass('icon-panel-open');
		//$toggleSides.find('.material-symbols-rounded').text('arrow_menu_open');
	}
}

// 리사이즈 핸들러
function handleResize() {
	updateToggleButtonIcon();
}

// 사이드패널 초기화 및 버튼 클릭 이벤트 설정
function initSidePanel(toggleSelectors, modalSelector, panelSelector) {
	$toggleSides = $(toggleSelectors); // 여러 버튼을 모두 선택
	$modal = $(modalSelector);
	$panel = $(panelSelector);

	// 초기화
	resetSidePanel();

	// 버튼 클릭 이벤트
	$toggleSides.each(function () {
		$(this).on('click', function () {
			toggleSidePanel();
		});
	});

	// 리사이즈 이벤트
	$(window).on('resize', handleResize);
	handleResize(); // 초기 실행
}

// 사용 예시
/* 
$(document).ready(function () {
	initSidePanel('.modal.facility #toggle-side', '.modal.facility', '.modal.facility .contents-panel');
});
*/

// 특정 테이블을 대상으로 지정한 수만큼 행을 복제하는 함수
function duplicateRow(tableSelector, numCopies = 10) {
	const table = document.querySelector(tableSelector); // 지정된 선택자로 테이블을 참조

	if (table) {
		const tbody = table.querySelector('tbody');
		const duplicateRow = tbody ? tbody.querySelector('tr') : null;

		if (duplicateRow) {
			// 지정된 횟수만큼 복사하여 해당 tbody에 추가합니다.
			for (let i = 0; i < numCopies; i++) {
				const clonedRow = duplicateRow.cloneNode(true);
				tbody.appendChild(clonedRow);
			}
			//console.log(numCopies + '개의 duplicate 행이 복제되었습니다.');
		} else {
			console.warn("복제할 요소가 없습니다.");
		}
	} else {
		console.warn("지정한 테이블을 찾을 수 없습니다.");
	}
}

