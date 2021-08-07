import React, { useRef,useState,useEffect } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import FilterListToggle from '../../components/Filter/index';
import { menuItemsData,categoryList } from '../../components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [List, setList] = useState(menuItemsData)

  const handleSelectToggle  = (e,value)=>{
    if(!value){
      return null
    }
      setSelectedCategory(value)

    }

  const applyFilters = ()=>{
    let updatedList = menuItemsData
    if(selectedCategory  === 'All'){
      setList(menuItemsData)
    }else{
      updatedList = updatedList.filter(item=>item.category === selectedCategory)
      setList(updatedList)
    }

    
  }

  

  useEffect(() => {
        applyFilters()
  }, [selectedCategory])

  useEffect(()=>{
    setList(menuItemsData)
  },[])

 

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={handleSelectToggle}/>
      <Menu list={List} ref={menuRef} />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
