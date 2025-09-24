import React from 'react';
import { DeviceCategory } from '../types';

interface DeviceSelectorProps {
  devices: DeviceCategory[];
  selectedDevice: string;
  onDeviceChange: (deviceId: string) => void;
  disabled?: boolean;
}

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  devices,
  selectedDevice,
  onDeviceChange,
  disabled = false
}) => {
  return (
    <div className="device-selector">
      <label htmlFor="device-select" className="selector-label">
        Device Type
      </label>
      <select
        id="device-select"
        value={selectedDevice}
        onChange={(e) => onDeviceChange(e.target.value)}
        disabled={disabled}
        className="device-select"
        aria-describedby="device-select-help"
      >
        <option value="">Select a device type...</option>
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.name}
          </option>
        ))}
      </select>
      <p id="device-select-help" className="selector-help">
        Choose the type of device you want to calculate impact for
      </p>
    </div>
  );
};

export default DeviceSelector;