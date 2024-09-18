import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const CloudLocation = () => {
  const [longitude, setLongitude] = useState(120.5802); // 默认经度：绍兴
  const [latitude, setLatitude] = useState(30.0298);    // 默认纬度：绍兴
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const mapInstance = new AMap.Map('mapContainer', {
        center: [longitude, latitude], // 默认中心点为绍兴
        zoom: 13, // 设置缩放级别
      });
      setMap(mapInstance);
    };

    // 判断高德地图的SDK是否已经加载
    if (window.AMap) {
      loadMap();
    } else {
      // 动态加载高德地图 SDK
      const script = document.createElement('script');
      script.src = "https://webapi.amap.com/maps?v=2.0&key=4a6434ff122931e7a54dc7d1c04dfd7c";
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, [longitude, latitude]); // 当经纬度改变时，重新渲染地图

  const updateMapCenter = () => {
    if (map) {
      map.setCenter([longitude, latitude]); // 设置地图中心为用户输入的经纬度
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云定位</h3>
      <div className="space-y-4">
        {/* 输入经度和纬度 */}
        <div className="space-y-2">
          <div>
            <label>经度：</label>
            <input 
              type="number" 
              value={longitude} 
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
              className="border p-1"
            />
          </div>
          <div>
            <label>纬度：</label>
            <input 
              type="number" 
              value={latitude} 
              onChange={(e) => setLatitude(parseFloat(e.target.value))} 
              className="border p-1"
            />
          </div>
        </div>
        
        {/* 按钮来获取当前位置 */}
        <Button onClick={updateMapCenter}>更新地图中心</Button>
        
        {/* 地图容器 */}
        <div className="border p-4" style={{ height: '500px' }}>
          <div id="mapContainer" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CloudLocation;
