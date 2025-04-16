# Ensure you are logged in to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resource-group"
$location = "eastus"
$vmName = "example-vm"
$adminUsername = "azureuser"
$adminPassword = ConvertTo-SecureString "P@ssw0rd123!" -AsPlainText -Force
$size = "Standard_DS1_v2"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location -Name "example-vnet" -AddressPrefix "10.0.0.0/16"
$subnet = Add-AzVirtualNetworkSubnetConfig -Name "default" -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location -Name "example-pip" -AllocationMethod Dynamic

# Create a network security group
$nsg = New-AzNetworkSecurityGroup -ResourceGroupName $resourceGroupName -Location $location -Name "example-nsg"

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location -Name "example-nic" -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id -NetworkSecurityGroupId $nsg.Id

# Create a virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $size |
    Set-AzVMOperatingSystem -Windows -ComputerName $vmName -Credential (New-Object PSCredential ($adminUsername, $adminPassword)) |
    Set-AzVMSourceImage -PublisherName "MicrosoftWindowsServer" -Offer "WindowsServer" -Skus "2019-Datacenter" -Version "latest" |
    Add-AzVMNetworkInterface -Id $nic.Id

# Create the virtual machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig