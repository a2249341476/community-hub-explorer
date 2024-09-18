import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const CloudLocation = () => {
  
  useEffect(() => {
    const loadMap = () => {
      // 初始化高德地图并将中心点设置为绍兴
      var map = new AMap.Map('mapContainer', {
        center: [120.5802, 30.0298], // 绍兴的经纬度
        zoom: 13, // 设置缩放级别
      });
    };

    // 判断高德地图的SDK是否已经加载
    if (window.AMap) {
      loadMap();
    } else {
      // 如果没有加载，则动态加载高德地图 SDK
      const script = document.createElement('script');
      script.src = "https://webapi.amap.com/maps?v=2.0&key=4a6434ff122931e7a54dc7d1c04dfd7c";
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, []); // 空数组表示只在组件挂载时执行一次

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">云定位</h3>
      <div className="space-y-4">
        <Button>获取当前位置</Button>
        <div className="border p-4 h-64">
          {/* 地图容器 */}
          <div id="mapContainer" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CloudLocation;
