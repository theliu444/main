const coll = document.querySelector('.li_work ul')
        const toggleBtn = document.querySelector('.toggle_btn')
        const svgD = document.getElementById('svg_down')
        const svgU = document.getElementById('svg_up')

        /* 01-1導覽列-手機滑動menu開關 */
        const menubtn = document.querySelector('.menu_btn')
        const menuback = document.querySelector('.slide_menu_backdrop')
        const menuWrap = document.querySelector('.mobile_slide_menu_wrap')
        const closebtn = document.querySelector('.close_btn')
        // 滑動
        const slideMenu = document.querySelector('.mobile_slide_menu')
        // menu關
        menubtn.addEventListener('click',function(){
            menuWrap.style.display = 'block'
            // menuWrap.style.width = '100%'

            if(menuWrap.style.display= 'block'){
                menuback.addEventListener('click',function(){
                    menuWrap.style.display = 'none'
                })
            }

        })

        // menu關
        closebtn.addEventListener('click',function(){
            menuWrap.style.display = 'none'
            // menuWrap.style.width = '0%'
            
        })
        





        /* 01-2導覽列-手機menu作品欄開關 */
        toggleBtn.addEventListener('click',function(){
            coll.style.display = (coll.style.display==='block') ? 'none' : 'block'
                      
            svgU.style.display = (svgU.style.display==='block') ? 'none' : 'block'
            svgD.style.display = (svgD.style.display==='none') ? 'block' : 'none'     
            
        })