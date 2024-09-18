import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const CloudLocation = () => {
  const [longitude, setLongitude] = useState(120.5802); // 默认经度：绍兴
  const [latitude, setLatitude] = useState(30.0298);    // 默认纬度：绍兴
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      if (map) {
        map.setCenter([longitude, latitude]); // 如果地图已经存在，更新中心点
      } else {
        const mapInstance = new AMap.Map('mapContainer', {
          center: [longitude, latitude], // 默认中心点为绍兴
          zoom: 13, // 设置缩放级别
        });
        setMap(mapInstance);

        // 初始化自动完成服务
        const autoCompleteInstance = new AMap.AutoComplete({
          input: "searchInput", // 绑定输入框
        });

        // 绑定选择建议后的回调函数
        autoCompleteInstance.on('select', (e) => {
          const geocoder = new AMap.Geocoder();
          geocoder.getLocation(e.poi.name, (status, result) => {
            if (status === 'complete' && result.geocodes.length) {
              const location = result.geocodes[0].location;
              setLongitude(location.lng);
              setLatitude(location.lat);
              mapInstance.setCenter([location.lng, location.lat]);
            }
          });
        });
      }
    };

    // 检查 AMap 是否已经加载
    if (window.AMap) {
      loadMap();
    } else {
      // 动态加载高德地图 SDK
      const script = document.createElement('script');
      script.src = "https://webapi.amap.com/maps?v=2.0&key=4a6434ff122931e7a54dc7d1c04dfd7c";
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, [longitude, latitude, map]); // 每次经纬度或 map 实例变化时更新

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云定位</h3>
      <div className="space-y-4">
        {/* 输入模糊搜索的查询 */}
        <div>
          <label>搜索地点：</label>
          <input 
            id="searchInput" // 给输入框添加ID以便自动完成服务使用
            type="text"
            placeholder="输入地点名称..."
            className="border p-1"
          />
        </div>

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
        
        {/* 地图容器 */}
        <div className="border p-4" style={{ height: '500px' }}>
          <div id="mapContainer" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CloudLocation;


