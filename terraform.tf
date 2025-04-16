provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  type        = string
  description = "The name of the storage account."
}

variable "location" {
  type        = string
  default     = "eastus"
  description = "The location where the storage account will be created."
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  location                 = var.location
  resource_group_name      = azurerm_resource_group.example.name
  account_tier             = "Standard"
  account_replication_type = "LRS"
  kind                     = "StorageV2"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = var.location
}