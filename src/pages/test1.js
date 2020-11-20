api.getAppInfo().then(([userData, initialCardsData]) => {
    const userId = userData._id;
    const cardGrid = new Section({
      items: initialCardsData,
      renderer: showCard
    }, 
    cardsConfig.placesWrap
    )
    
    cardGrid.renderItems();
    
    const addForm = new PopupWithForm({
      popupElement: document.querySelector(popupConfig.popupAdd), 
      handleFormSubmit: (data) => {
        creating(true, popupAdd);
        api.addCard(data).then(data => {
          showCard(data);
          addForm.close();
        })
        .catch(err => console.log(err))
      }
    });
    
    addForm.setEventListeners();
    
    buttonAdd.addEventListener("click", () => {
      addForm.open();
      popupAdd.querySelector(".button__submit").textContent = "Create";
    });
  
  
    function showCard(data) {
      const card = new Card({
        data,
        handleCardClick: () => {
          imagePopup.open(data);
        },
        handleDeleteClick: (cardId) => {
          deleteForm.open(cardId);
          popupDelete.querySelector(".button__submit").textContent = "Yes";
          deleteForm.setSubmitAction(() => {
            deleting(true, popupDelete);
            api.removeCard(cardId).then(() => {
              card.deleteCard();
              deleting(false, popupDelete);
              deleteForm.close();
          })
          .catch(err => console.log(err))
        })
        },
        handleLikeClick: (cardId) => {
          if (card.likeButton.classList.contains("button__like_activated")) {
            card.likeButton.classList.remove("button__like_activated");
            api.cardLikeRemove(cardId).then(res => card.showLikeCount(res.likes.length))
            .catch(err => console.log(err))
          } else {
            card.likeButton.classList.add("button__like_activated");
            api.cardLikeAdd(cardId)
            .then(res => card.showLikeCount(res.likes.length))
            .catch(err => console.log(err))
          }
        }
      }, 
      userId,
      cardSelector);  
  
      cardGrid.addItem(card.generateCard());
      creating(false, popupAdd);
  
      const newProfile = new UserInfo(".profile__name", ".profile__occupation");
      
      newProfile.setUserInfo({userName: userData.name, userOccupation: userData.about});
      profileAvatar.src = userData.avatar;
          
      const editForm = new PopupWithForm({
        popupElement: document.querySelector(popupConfig.popupEdit),
        handleFormSubmit: (data) => {
          loading(true, popupEdit);
          api.setUserInfo({name: data.name, about: data.occupation})
          .then(res => {
            newProfile.setUserInfo({userName: data.name, userOccupation:  data.occupation});
          })
          .then(res => {
            loading(false, popupEdit); 
            editForm.close();
          })
          .catch(err => console.log(err))
        }
      });
      
      buttonEdit.addEventListener("click", () => {
        const profileInfo = newProfile.getUserInfo();
        inputName.value = profileInfo.name;
        inputOccupation.value = profileInfo.occupation;
        editForm.open();
      });
      
      editForm.setEventListeners();
  
  }}).catch(err => console.log(err));
  
  
  const editProfileValidator = new FormValidator(defaultConfig, formEdit);
  editProfileValidator.enableValidation();
  const addCardValidator = new FormValidator(defaultConfig, formAdd);
  addCardValidator.enableValidation();
  
  
  function handleAvatarEdit(data) {
    loading(true, popupAvatar);
    api.setUserAvatar({
      avatar: data.avatarURL
    })
    .then(res => {
      profileAvatar.src = res.avatar;
      loading(false, popupAvatar);
      editAvatarForm.close();
    })
    .catch(err => console.log(err));
  }
  
  const editAvatarForm = new PopupWithForm({
    popupElement: document.querySelector(popupConfig.popupEditAvatar),
    handleFormSubmit: (data) => {
      handleAvatarEdit(data)
      // api.setUserAvatar({ avatar: data.avatarURL })
      // .then(res => {
      //   profileAvatar.src = res.avatar
      // });
      }
  });
     
  avatarEditButton.addEventListener("click", () => {
    editAvatarForm.open();
  });
  
  editAvatarForm.setEventListeners();
  
  const editAvatarValidator = new FormValidator(defaultConfig, formEditAvatar);
  editAvatarValidator.enableValidation();