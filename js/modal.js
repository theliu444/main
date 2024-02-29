const titleSpan = document.querySelectorAll('.title span:nth-child(1)')
        const modals = document.querySelectorAll('.modal')
        const body = document.querySelector('body')
        const modalBack = document.querySelector('.modal-backdrop')
        const dismiss = document.querySelectorAll('.dismiss')
        const pics = document.querySelectorAll('.wrap_img .pic img')
        
        const header = document.querySelector('.header')
        const sectionWork = document.querySelector('.section_work')

        // 互動視窗
        const modalCont = document.querySelectorAll('.modal-content')
        //導覽列背景色
        let headH = header.clientHeight
        sectionWork.style.padding = `${headH}px 0px 0px 0px`
        
        window.addEventListener('scroll',function(){
            const n = document.documentElement.scrollTop
            if(n>=headH){
                header.style.backgroundColor = 'rgba(0, 0, 0, 1)'
            }else{
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
            }
        })
        
        function openModal(x){
            modals[x].style.display = 'block'
            body.classList.add('modal-open')
            modalBack.style.display = 'block'
            

            if(modals[x].style.display = 'block'){
                modals[x].addEventListener('click',function(){
                    // console.log(44)
                    closeModal(x)
                })
                modalCont[x].addEventListener('click',function(e){
                    // console.log(44)
                    e.stopPropagation()
                })
            }

        }

        function closeModal(x){
            modals[x].style.display = 'none'
            body.classList.remove('modal-open')
            modalBack.style.display = 'none'
        }

        
        for(let i=0 ; i<titleSpan.length ; i++){
            // 互動視窗顯示
            titleSpan[i].addEventListener('click',function(){
            // console.log(11)
                openModal(i)
            })
            pics[i].addEventListener('click',function(){
                openModal(i)
            })

            dismiss[i].addEventListener('click',function(){
                closeModal(i)
            })

            
            
        }